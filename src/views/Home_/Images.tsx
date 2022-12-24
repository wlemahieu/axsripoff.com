import { FC, useEffect, useState } from 'react';
import { getApp } from 'firebase/app';
import { getStorage } from '@firebase/storage';
import { ref, getDownloadURL, StorageReference /*, getMetadata*/ } from '@firebase/storage';
import { ImageList, ImageListItem } from '@mui/material';

interface PropsI {
  images: Array<string>;
}

const SubmissionImages: FC<PropsI> = ({ images }: PropsI) => {
  const app = getApp();
  const storage = getStorage(app);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    // get file references
    const references = images.map((fileName: string) => {
      return ref(storage, `submissions/${fileName}`);
    });
    // get file urls
    (async () => {
      setData(await Promise.all(references.map((ref: StorageReference) => getDownloadURL(ref))));
    })();
  }, []);

  return (
    <ImageList variant="woven" cols={3} gap={8}>
      {data.map((url: any, key: number) => {
        return (
          <ImageListItem key={`img-${key}`}>
            <img src={url} srcSet={url} alt={`Image #${key}`} loading="lazy" />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};

export default SubmissionImages;
