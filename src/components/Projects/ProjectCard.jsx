import * as React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Chip, Typography } from '@mui/material';

const ProjectCard = ({ title, description, image, tags, demoLink }) => {
  return (
    <Card sx={{ minWidth: 300, margin: 2, borderRadius: 5, height: 400}} raised elevation={6}>
      <CardMedia sx={{ height: 140}} image={image} title={title} />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" className='cardText'>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className='cardText'>
          {description}
        </Typography>
        <div style={{ marginTop: 8 }}>
          {tags.map((tag, index) => (
            <Chip key={index} label={tag} variant="outlined" sx={{ marginRight: 0.5 }} />
          ))}
        </div>
      </CardContent>
      <CardActions>
        <Button size="small" href={demoLink} target="_blank">
          Demo
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
