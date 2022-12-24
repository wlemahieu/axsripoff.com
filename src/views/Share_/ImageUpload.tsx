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
import useGetFirebaseUser from '@src/hooks/useGetFirebaseUser';

const ImageUpload: FC = () => {
  const files = useContextSelector(ShareContext, (c) => c.files);
  const setFiles = useContextSelector(ShareContext, (c) => c.setFiles);
  const app = getApp();
  const storage = getStorage(app);
  const user = useGetFirebaseUser();
  const uid = user?.uid as string;

  const onDrop = (files: FileValidated[]) => {
    files.map((f: unknown) => {
      const file = f as FileValidated;

      const hashName = md5(`${file.file.name}-${uid}`);
      const storageRef = ref(storage, `submissions/${hashName}`);
      // sendEmail(values);
      uploadBytes(storageRef, file.file, { customMetadata: { uid } }).catch((e) => console.log(e));

      return hashName;
    });
  };

  const onChange = (incomingFiles: any) => {
    setFiles(incomingFiles);
  };

  const onDelete = (hashName: string) => {
    const storageRef = ref(storage, `submissions/${hashName}`);
    (async () => {
      const metadata = await getMetadata(storageRef);
      if (metadata?.customMetadata?.uid === uid) {
        deleteObject(storageRef);
        setFiles(files.filter((x: any) => x.file.name !== hashName));
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
            console.log('file', file);
            return (
              <FileItem
                {...file}
                key={file.id}
                onDelete={() => onDelete(file?.file?.name)}
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
