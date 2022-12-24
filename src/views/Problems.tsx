/**
 * Problems page view
 */
import { FC, useEffect, useState } from 'react';
import styles from '@views/About.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { DateTime } from 'luxon';
import { Paper } from '@mui/material';

const originalConcertDate = DateTime.fromObject({ year: 2021, month: 5, day: 3 });

const Problems: FC = () => {
  const [difference, setDifference] = useState<any>({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
  const { years, months, days, hours, minutes, seconds } = difference;

  useEffect(() => {
    setInterval(() => {
      const now = DateTime.now();
      const diff = now.diff(originalConcertDate, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']);
      setDifference(diff);
    }, 1000);
  }, []);

  return (
    <Container maxWidth="sm" className={styles.root}>
      <Typography variant="h3" gutterBottom>
        Problems
      </Typography>
      <Box className={styles.memberBlock}>
        <Typography variant="body1" sx={{ mb: 3 }}>
          The axsripoff.com publishers read through everyone's AXS complaints prior to approving them - but we also try
          to identify and document common issues people are complaining about in the grand scheme of things.
        </Typography>
        <Typography variant="body1" sx={{ mb: 6 }}>
          We understand that <b>in many or most cases, AXS is legally within their right to do what they are doing</b>.
          However, it doesn't change the fact that the company's services and/or implementation of their policy can have
          a negative effect on many consumers. <b>Here's what we've noticed so far:</b>
        </Typography>
        <Typography variant="h4" gutterBottom>
          Abuse of the "Delayed" status
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          How many times should a ticket purchaser have to accept a concert being "delayed" before deserving a refund?
          Consider you or family &amp; friends may have traveled somewhere to see that concert and now have extra
          expenses from the "delayed" concert. <b>Once? Twice? No limit on delays?</b>
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          How far from the original concert date is too far for AXS or their Promoter to continue to consider a concert
          "delayed"? <b>A month? A year? No limit on delays?</b>
        </Typography>
        <Box sx={{ mb: 6 }}>
          {difference ? (
            <Paper sx={{ p: 1, border: '3px solid red', boxShadow: '4px 4px 9px red' }}>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Our editor has been waiting
              </Typography>
              <Box sx={{ mt: 1, p: 1, fontSize: '18px', fontWeight: 'bold' }}>
                <div>{years} year(s)</div>
                <div>{months} month(s)</div>
                <div>{days} day(s)</div>
                <div>{hours} hour(s)</div>
                <div>{minutes} minute(s)</div>
                <div>and {Math.floor(seconds)} second(s)... </div>
              </Box>

              <Typography variant="h6" sx={{ mb: 2 }}>
                for a concert that was supposed to happen on <b>{originalConcertDate.toISODate()}</b>!
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                It's been delayed <b>2 times</b> already...
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                <b>No refunds</b> are allowed!
              </Typography>
              <Typography variant="h6">Is it normal to not receive a service or product for that long?</Typography>
              <Typography variant="h5">¯\_(ツ)_/¯</Typography>
            </Paper>
          ) : null}
        </Box>

        <Typography variant="h4" gutterBottom>
          Abuse of the canned response
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Don't you hate it when you get canned responses? What if you got the same canned responses from different
          "customer service" agents over many months of time? It feels like talking to a robot who's abusing you without
          recourse.
        </Typography>
        <Box sx={{ mb: 6 }}>
          {difference ? (
            <Paper sx={{ p: 1, border: '3px solid red', boxShadow: '4px 4px 9px red' }}>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Our editor has received
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                <div>
                  <b>3+ canned responses</b> from
                </div>
                <div>
                  <b>4+ customer service agents spanning</b>
                </div>
                <div>
                  <b>3.5+ months</b>
                </div>
                With verbiage repeatedely stating they are waiting for "Promoter" to establish new tour dates (for the
                3rd time) and that refunds are not allowed. AXS explicitly does not care about their customer's
                experience or that they can hide behind a policy to prevent giving refunds to customers for so long.
              </Typography>
              <Typography variant="h6" sx={{ mb: 1 }}>
                This "delay" should be considered a "cancelation" at this point.
              </Typography>
              <Typography variant="body1">More specific details coming soon!</Typography>
            </Paper>
          ) : null}
        </Box>
      </Box>
    </Container>
  );
};

export default Problems;
