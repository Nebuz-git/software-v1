import React from 'react';
import './mandala.css';
import Settings from '../../components/setting/Setting';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';


const Mandala = () => {
  return (
    <div className="mandala__main section__padding" id='mandala'>
      <div className="mandala__main-heading">
      <h1 className="gradient__text">A lot is happening, <br/> get creative</h1>
    </div>

    <div className='text'>
      <h2 className='gradient__text'>CANVAS</h2>
      <h2 className='gradient__text'>SETTINGS</h2> 
    </div>

      <div className='parent_container'>
        <div className='canvas-cont'>
        <div className='canvas'> </div>
        <TextField className='canvas-cont__input' id="filled-basic" label="Name" variant="filled" color='secondary'/>
        </div>
          

          <div className='settings'>
          <div class="form__group">
           <input type="size" class="form__input" id="size" placeholder="SIZE - DEFAULT 500x500" />
           <label for="size" class="form__label">Size</label>
          </div>
          <div className='form__select'>
          <select class="form-select">
        <option selected>raw</option>
        <option value="1">heic</option>
        <option value="2">heif</option>
        <option value="3">avif</option>
        <option value="4">jpeg</option>
        <option value="5">jpg</option>
        <option value="6">png</option>
        <option value="7">tiff</option>
        <option value="8">tif</option>
        <option value="9">webp</option>
        <option value="10">gif</option>
        <option value="11">jp2</option>
        <option value="12">jpx</option>
        <option value="13">j2k</option>
        <option value="14">j2c</option>
        </select>
          </div>
    
    <div className='switch_container'>
      <div className='switch_field'>
        <label htmlFor="switch"> Greyscale Effect</label>
        <Switch  defaultChecked color="secondary" />
      </div>
    </div>

    <div className='color_container'>
      <div className='color_field'>

        <label for="exampleColorInput" class="form-label">Color Tint</label>
       <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color"></input>

      </div>
    </div>
  
            
             </div>
        </div>
        

    </div>
  )
}

export default Mandala