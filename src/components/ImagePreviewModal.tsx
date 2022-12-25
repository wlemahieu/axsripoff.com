/**
 * Image preview modal
 */
import { FC } from 'react';
import Dialog from '@mui/material/Dialog';
import { useContextSelector } from 'use-context-selector';
import { GlobalContext } from './Providers';

const ImagePreviewModal: FC = () => {
  const previewImgOpen = useContextSelector(GlobalContext, (c) => c?.state?.previewImgOpen);
  const previewImgSrc = useContextSelector(GlobalContext, (c) => c?.state?.previewImgSrc);
  const setState = useContextSelector(GlobalContext, (c) => c?.setState);

  const onClose = () => {
    setState((s) => ({ ...s, previewImgOpen: false }));
  };

  return (
    <Dialog maxWidth="lg" open={Boolean(previewImgOpen)} onClose={onClose}>
      <img src={previewImgSrc} />
    </Dialog>
  );
};

export default ImagePreviewModal;
