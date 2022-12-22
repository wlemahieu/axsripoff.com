/**
 * SharePrompt page view
 */
import { FC, useState } from 'react';
import { useContextSelector } from 'use-context-selector';
import { Dropzone, FileItem, FullScreenPreview } from '@dropzone-ui/react';
import { ShareContext } from '@views/Share';

const ImageUpload: FC = () => {
  const files = useContextSelector(ShareContext, (c) => c.files);
  const setFiles = useContextSelector(ShareContext, (c) => c.setFiles);

  const [imageSrc, setImageSrc] = useState(undefined);
  const updateFiles = (incomingFiles: any) => {
    console.log('incoming files', incomingFiles);
    setFiles(incomingFiles);
  };
  const onDelete = (id: any) => {
    setFiles(files.filter((x: any) => x.id !== id));
  };
  const handleSee = (imageSource: any) => {
    setImageSrc(imageSource);
  };
  const handleClean = (files: any) => {
    console.log('list cleaned', files);
  };

  //https://www.gbmb.org/megabytes
  return (
    <>
      <Dropzone
        style={{ width: '100%' }}
        onChange={updateFiles}
        minHeight="150px"
        onClean={handleClean}
        value={files}
        maxFiles={6}
        maxFileSize={5242880}
        accept=".png,.jpg,.jpeg,.gif,.tiff"
        disableScroll
        label="Click or drop your images here"
      >
        {files.length > 0 &&
          files.map((file: any) => (
            <FileItem
              {...file}
              key={file.id}
              onDelete={onDelete}
              onSee={handleSee}
              //localization={"ES-es"}
              resultOnTooltip
              preview
              info
              hd
              style={{ letterSpacing: 0 }}
            />
          ))}
      </Dropzone>
      <FullScreenPreview imgSource={imageSrc} openImage={imageSrc} onClose={(e: any) => handleSee(undefined)} />
    </>
  );
};

export default ImageUpload;
