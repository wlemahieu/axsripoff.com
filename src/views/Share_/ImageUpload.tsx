/**
 * SharePrompt page view
 */
import { FC } from 'react';
import { useContextSelector } from 'use-context-selector';
import { Dropzone, FileItem, FileValidated } from '@dropzone-ui/react';
import { ShareContext } from '@views/Share';
import md5 from 'md5';
import { getStorage, ref, uploadBytes, deleteObject, getMetadata } from '@firebase/storage';
import { getApp } from '@firebase/app';
import useGetFirebaseUID from '@src/hooks/useGetFirebaseUID';
import useSetMySubmission from '@src/hooks/useSetMySubmission';

const getFileHash = (fileName: string, uid: string) => {
  return md5(`${fileName}-${uid}`);
};

const ImageUpload: FC = () => {
  const files = useContextSelector(ShareContext, (c) => c.files);
  const document = useContextSelector(ShareContext, (c) => c.document);
  const setFiles = useContextSelector(ShareContext, (c) => c.setFiles);
  const app = getApp();
  const storage = getStorage(app);
  const uid = useGetFirebaseUID();
  const setDocument = useSetMySubmission();

  const onDrop = (files: FileValidated[]) => {
    files.map((f: unknown) => {
      const file = f as FileValidated;
      const originalFilename = file.file.name;
      const hashName = getFileHash(originalFilename, uid);
      const storageRef = ref(storage, `submissions/${hashName}`);
      // sendEmail(values);
      uploadBytes(storageRef, file.file, { customMetadata: { uid, originalFilename } })
        .then(() => {
          const images = document?.images || [];
          setDocument({ ...document, images: [...images, hashName] });
        })
        .catch((e) => console.log(e));
      return hashName;
    });
  };

  const onChange = (incomingFiles: any) => {
    setFiles(incomingFiles);
  };

  const onDelete = (fileName: string) => {
    const originalFilename = fileName;
    const hashName = getFileHash(originalFilename, uid);
    const storageRef = ref(storage, `submissions/${hashName}`);
    (async () => {
      const metadata = await getMetadata(storageRef);
      if (metadata?.customMetadata?.uid === uid) {
        await deleteObject(storageRef);
        await setDocument({ ...document, images: document?.images?.filter((img) => img !== hashName) });
        setFiles(files.filter((x: any) => x.file.name !== originalFilename));
      }
    })();
  };

  return (
    <>
      <Dropzone
        style={{ width: '100%' }}
        onDrop={onDrop}
        onChange={onChange}
        minHeight="150px"
        onClean={undefined}
        value={files as Array<FileValidated>}
        maxFiles={6}
        maxFileSize={5242880}
        accept=".png,.jpg,.jpeg,.gif,.tiff"
        disableScroll
        label="Click or drop your images here"
      >
        {files.length > 0 &&
          files.map((file: any) => {
            return (
              <FileItem
                {...file}
                key={file.id}
                onDelete={() => {
                  return onDelete(file?.file?.name);
                }}
                resultOnTooltip
                preview
                style={{ letterSpacing: 0 }}
              />
            );
          })}
      </Dropzone>
    </>
  );
};

export default ImageUpload;
