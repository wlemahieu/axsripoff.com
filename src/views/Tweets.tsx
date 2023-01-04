/**
 * Problems page view
 */
import { FC, useEffect, useState } from 'react';
import styles from '@views/About.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Tweet } from 'react-twitter-widgets';
import useGetFirestore from '@src/hooks/useGetFirestore';
import { collection, getDocs } from 'firebase/firestore';
import useElementOnScreen from '@src/hooks/useElementOnScreen';
import Chip from '@mui/material/Chip';
import { startCase } from 'lodash';

interface TweetsI {
  id: string;
  createdAt: string;
  categories: Array<string>;
}

interface PropsI {
  id: string;
  categories: Array<string>;
}

const TweetComponent: FC<PropsI> = ({ id, categories }: PropsI) => {
  const [loaded, setLoaded] = useState(false);
  const [containerRef, isIntersecting] = useElementOnScreen();

  useEffect(() => {
    if (!loaded) setLoaded(true);
  }, [isIntersecting]);

  return (
    <Box ref={containerRef} sx={{ mt: 2, mb: 2, minWidth: '550px', minHeight: '200px' }}>
      <Box>
        {categories.map((category: string) => (
          <Chip label={startCase(category)} sx={{ ml: 1 }} color="error" />
        ))}
      </Box>
      {loaded ? <Tweet tweetId={id} /> : null}
    </Box>
  );
};

const Tweets: FC = () => {
  const db = useGetFirestore();
  const [tweets, setTweets] = useState<Array<TweetsI>>([]);

  // grab all negative tweets
  useEffect(() => {
    (async () => {
      const querySnapshot = (await getDocs(collection(db, 'tweets'))) as any;
      const newTweets: Array<TweetsI> = [];
      querySnapshot.forEach((doc: any) => {
        const data = doc.data();
        newTweets.push(data);
      });
      setTweets(newTweets);
    })();
  }, []);

  return (
    <Container maxWidth="sm" className={styles.root}>
      <Typography variant="h3" gutterBottom>
        Negative AXS Tweets
      </Typography>
      {tweets.map((tweet) => (
        <TweetComponent {...tweet} />
      ))}
    </Container>
  );
};

export default Tweets;
