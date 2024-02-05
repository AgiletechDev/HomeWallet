import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import imgPost from '../assets/images/portal/section A.png';

const posts = [
  {
    title: 'What is Blockchain Layer 1: Understanding the Foundation of Blockchain Technology',
    image: imgPost,
    description: 'Discover the fundamentals of Blockchain Layer 1 technology in this comprehensive article. Explore the key...',
  },
  {
    title: 'What is Blockchain Layer 1: Understanding the Foundation of Blockchain Technology',
    image: imgPost,
    description: 'Discover the fundamentals of Blockchain Layer 1 technology in this comprehensive article. Explore the key...',
  },
  {
    title: 'What is Blockchain Layer 1: Understanding the Foundation of Blockchain Technology',
    image: imgPost,
    description: 'Discover the fundamentals of Blockchain Layer 1 technology in this comprehensive article. Explore the key...',
  },
  {
    title: 'What is Blockchain Layer 1: Understanding the Foundation of Blockchain Technology',
    image: imgPost,
    description: 'Discover the fundamentals of Blockchain Layer 1 technology in this comprehensive article. Explore the key...',
  },
  {
    title: 'What is Blockchain Layer 1: Understanding the Foundation of Blockchain Technology',
    image: imgPost,
    description: 'Discover the fundamentals of Blockchain Layer 1 technology in this comprehensive article. Explore the key...',
  },
  {
    title: 'What is Blockchain Layer 1: Understanding the Foundation of Blockchain Technology',
    image: imgPost,
    description: 'Discover the fundamentals of Blockchain Layer 1 technology in this comprehensive article. Explore the key...',
  },
  {
    title: 'What is Blockchain Layer 1: Understanding the Foundation of Blockchain Technology',
    image: imgPost,
    description: 'Discover the fundamentals of Blockchain Layer 1 technology in this comprehensive article. Explore the key...',
  },
  {
    title: 'What is Blockchain Layer 1: Understanding the Foundation of Blockchain Technology',
    image: imgPost,
    description: 'Discover the fundamentals of Blockchain Layer 1 technology in this comprehensive article. Explore the key...',
  },
  {
    title: 'What is Blockchain Layer 1: Understanding the Foundation of Blockchain Technology',
    image: imgPost,
    description: 'Discover the fundamentals of Blockchain Layer 1 technology in this comprehensive article. Explore the key...',
  },
];

export const Blog = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

 return (
  <Box
  sx={{
    display: 'flex',
    mt: '3em',
    flexDirection: isMobile ? 'column' : 'row',
  }}
>
  <Box
    sx={{
      flex: '70%',
      flexDirection: 'column',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: '2em',
    }}
  >
    {posts.map((post, index) => (
      <Box key={index}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '300px',
            textAlign: 'justify'
          }}
        >
          <img
            src={post.image}
            style={{
              width: '300px',
              height: '200px',
              border: '1px solid darkgray',
              borderRadius: '25px',
            }}
          />
          <Typography variant="h6" color="#33277b" fontWeight="600" sx={{ mt: '0.5em' }}>
            {post.title}
          </Typography>
          <div style={{ width: '30px', height: '3px', backgroundColor: 'gray' }} />
          <Typography variant="p">{post.description}</Typography>
        </Box>
      </Box>
    ))}
  </Box>
  <Box
    sx={{
      flex: '30%',
      paddingLeft: '1em',
      borderLeft: '1px solid gray',
      mt: isMobile ? '1em' : 0,
    }}
  >
    <aside style={{ color: '#33277b', fontSize: '30px' }}>
      <Typography fontWeight="bold" variant="h6">
        Recent posts
      </Typography>
      <div style={{ width: '30px', height: '3px', backgroundColor: 'gray' }} />
      <br />
      Aside 2
      <br />
      Aside 3
      <br />
      Aside 4
      <br />
      Aside 5
    </aside>
  </Box>
</Box>
);
};