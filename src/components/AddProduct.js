import React from 'react'
import  {ImageList} from '@mui/material'
import { ToggleButton } from '@mui/material';
import { Box, Card,CardContent,Typography,ToggleButtonGroup } from '@mui/material'
import './Addproducts.css'

const AddProducts = () => {
  return (
  
    <>
    <div>
      <h3> SortBy:</h3> 
    </div>
    <div className='sort-selection'>
<form action='#'>
    <label hrmlFor="sort"></label>
    <select name="sort" id="sort" className="sort-selection-type" onClick={sorting}>
        <option value="default">Default</option>
        <option value="#" disabled></option>
        <option value="htol">Price:High to Low</option>
        <option value="#" disabled></option>
        <option value="ltoh">Price:Low to High</option>
        <option value="#" disabled></option>
        <option value="">Newest</option>
    </select>
      </form>
    </div>
    <div className="togglebutton">
        <ToggleButtonGroup>
            <ToggleButton>ALL</ToggleButton>
            <ToggleButton>APPAREL</ToggleButton>
            <ToggleButton>ELECTRONICS</ToggleButton>
            <ToggleButton>FOOTWEAR</ToggleButton>
        </ToggleButtonGroup>
    </div>
    
    <Box width>
          <Card>
              <div className='itemslist'>
                  <CardContent>
                      <img src='Images/istockphoto-1350560575-612x612.jpg' height='200px' width='200px'>
                      </img>
                      <div className='dis'>

                          <Typography gutterButtonh variant='h5' component='div'>
                              Shoes
                          </Typography>

                          <Typography gutterButtonh variant='h5' component='div'>
                              ₹1000
                          </Typography>


                      </div>
                      <Typography variant='body2' color='text.secoondary'>
                          Your best run starts with the right shoe. Compare natural, fast and plush styles to find the Nike running shoe for you.
                      </Typography>
                  </CardContent>
                  <CardContent>
                      <img src='Images\pexels-pixabay-267301.jpg' height='200px' width='200px'>
                      </img>
                      <div className='dis1'>

                          <Typography gutterButtonh variant='h5' component='div'>
                              Emergo Running Shoes
                          </Typography>

                          <Typography gutterButtonh variant='h5' component='div'>
                              ₹1679
                          </Typography>


                      </div>
                      <Typography variant='body2' color='text.secoondary'>
                          Superbly crafted Reebok Emergo Runner shoes for men. Made with Foam midsole which provides ultra lightweight responsive cushioning and increased flexibility
                      </Typography>
                  </CardContent>
                  <CardContent>
                      <img src='Images\MME73.jpg' height='200px' width='200px'>
                      </img>
                      <div className='dis1'>

                          <Typography gutterButtonh variant='h5' component='div'>
                              Emergo Running Shoes
                          </Typography>

                          <Typography gutterButtonh variant='h5' component='div'>
                              ₹1299
                          </Typography>


                      </div>
                      <Typography variant='body2' color='text.secoondary'>
                          Superbly crafted Reebok Emergo Runner shoes for men. Made with Foam midsole which provides ultra lightweight responsive cushioning and increased flexibility
                      </Typography>
                  </CardContent>
                  <CardContent>
                      <img src='Images/iphone-15-084541573-16x9_3.webp' height='200px' width='200px'>
                      </img>
                      <div className='dis1'>

                          <Typography gutterButtonh variant='h5' component='div'>
                              iphone
                          </Typography>

                          <Typography gutterButtonh variant='h5' component='div'>
                              ₹10,000
                          </Typography>


                      </div>
                      <Typography variant='body2' color='text.secoondary'>
                      Meet the new iPhone 15 Pro and iPhone 15. Buy now. Designed to make a difference. Get to know iPhone 15. 5G. iOS 17. All-day battery life. Accessibility features. Services: No-contact free delivery, EMI available, Shop with Specialists.
                      </Typography>
                  </CardContent>
                 < CardContent>
                      <img src='Images/istockphoto-510615049-612x612.jpg' height='200px' width='200px'>
                      </img>
                      <div className='dis1'>

                          <Typography gutterButtonh variant='h5' component='div'>
                           Men's Trousers
                          </Typography>

                          <Typography gutterButtonh variant='h5' component='div'>
                              ₹3,000
                          </Typography>


                      </div>
                      <Typography variant='body2' color='text.secoondary'>
                     Meet the next level comfort zone of trousers for men
                      </Typography>
                  </CardContent>
              </div>
          </Card>

      </Box></>
   
  )
}

export default AddProducts
