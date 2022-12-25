import { Button, Container, Typography } from '@mui/material';
import useSetMySubmission from '@src/hooks/useSetMySubmission';
import { FC } from 'react';
import { ShareContext, State } from '@views/Share';
import { useContextSelector } from 'use-context-selector';
import { DocumentData } from '@firebase/firestore';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { useNavigate } from 'react-router';

const FormSubmitted: FC = () => {
  const navigate = useNavigate();
  const document = useContextSelector(ShareContext, (c) => c.document);
  const setDocument = useSetMySubmission();

  const onUndo = async () => {
    try {
      if (document) {
        const doc = document as DocumentData;
        await setDocument({ ...doc, state: State.Editing, unsubmitCount: (doc.unsubmitCount += 1) });
      }
    } catch (e) {
      console.error('Error undoing submission: ', e);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h3">Thank you!</Typography>

      {document?.state === State.Submitted ? (
        <Typography variant="body2">
          We will review your complaint as soon as possible. If it's deemed reasonable, then we will make it publicly
          available on axsripoff.com. This will help our collective effort to document all bad experiences so AXS can't
          hide from them.
        </Typography>
      ) : null}

      {document?.state === State.Approved ? (
        <Typography variant="body2">
          Your AXS complaint has been approved and has been made publicly available on axsripoff.com. This will help our
          collective effort to document all bad experiences so AXS can't hide from them.
        </Typography>
      ) : null}

      <Button variant="contained" color="primary" onClick={() => navigate('/')}>
        Back to home
      </Button>

      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <Button
              variant="text"
              style={{ marginTop: '4rem', fontSize: '10px', color: 'black' }}
              disableRipple
              disableTouchRipple
              disableFocusRipple
              disableElevation
              {...bindTrigger(popupState)}
            >
              Undo Submit
            </Button>

            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Typography sx={{ p: 2 }}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={onUndo}
                  disableRipple
                  disableTouchRipple
                  disableFocusRipple
                  disableElevation
                >
                  Confirm Undo
                </Button>
              </Typography>
            </Popover>
          </div>
        )}
      </PopupState>
    </Container>
  );
};

export default FormSubmitted;
