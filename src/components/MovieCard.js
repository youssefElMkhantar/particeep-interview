import  React , {useState, useEffect} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import LikeDislikeButton from './LikeDislikeButton';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';import CircularProgress from '@mui/material/CircularProgress';
import { movies$ } from '../movies';
import { useSelector} from 'react-redux';


export default function TitlebarBelowImageList() {
    const [movies, setMovies] = React.useState([]);
    const [value, setValue] = React.useState(10);

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const category = useSelector((state) => state.category)
    console.log(category)
    
    useEffect(() => {
        movies$.then(data => {
            const copyData = [];
            for(const elt of data){
                if(category.includes(elt.category)){
                    copyData.push(elt)
                }
            };
            console.log(copyData)
            return copyData
        }).then(data => setMovies((currentMovies) => data))
    }, [category])

    useEffect(() => {
        movies$.then(data => setMovies(data))
    }, [])

    
    


    const handleClick = (id) => {
        setMovies(currentMovies => {
            console.log(currentMovies)
            const newMovies = [...currentMovies];
            newMovies.splice(id,1)
            console.log(newMovies)
            return newMovies;
        });
    };


  return (
    <div><br/>
    <FormControl component="fieldset">
      <FormLabel component="legend">choisir combien de film par page</FormLabel>
      <RadioGroup
        aria-label="amount"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        sx={{display: 'flex', flexDirection: 'row', marginLeft: 4}}
      >
        <FormControlLabel value={4} control={<Radio />} label="4" />
        <FormControlLabel value={8} control={<Radio />} label="8" />
        <FormControlLabel value={12} control={<Radio />} label="12" />
      </RadioGroup>
    </FormControl>
    <ImageList sx={{  display: 'flex', flexWrap: 'wrap', margin: 7 }}>
      {movies.slice(0,value).map((item) => (
        <ImageListItem key={item.img} style={{margin : 5}}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            style={{height: 400, width: 300}}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.category}</span>}
            position="below"
          />
          <Stack direction="row" spacing={2}>
            <div style={{marginLeft: 10}}>
                <p>like:</p>   
            </div>
            <LikeDislikeButton/>
            <div>
               <ThumbUpAltIcon/>
               <p>{item.likes}</p> 
            </div>
            <div>
                <ThumbDownAltIcon/>
                <p>{item.dislikes}</p>
            </div>
            <Button size="small" variant="contained" color="error" style={{height: 30}} 
                onClick={() => handleClick(movies.indexOf(item))}>
                delete
            </Button>
          </Stack>
        </ImageListItem>
      ))}
    </ImageList>
    </div>
    
  );
}

