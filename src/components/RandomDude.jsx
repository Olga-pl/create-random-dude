import React, { useState } from 'react';

export const RandomDude = (props) => {


  const assetBody = props.data.map(asset=>(
    Object.values(asset.Body[Math.floor(Math.random() * asset.Body.length)]).toString()
  ))
  const assetBottom = props.data.map(asset=>(
    Object.values(asset.Bottom[Math.floor(Math.random() * asset.Bottom.length)]).toString()
  ))
  const assetHead = props.data.map(asset=>(
    Object.values(asset.Head[Math.floor(Math.random() * asset.Head.length)]).toString()
  ))
  const assetScene = props.data.map(asset=>(
    Object.values(asset.Scene[Math.floor(Math.random() * asset.Scene.length)]).toString()
  ))


  const [changeAsset, setChangeAsset] = useState({assetBody, assetBottom, assetHead, assetScene});

  function updateAsset(){
    setChangeAsset(assetBody, assetBottom, assetHead, assetScene);
  }

     return (
      <div>
        
          <h2>Create Your Own Random Dude</h2>
          {props.data.map(asset => (
              <div className="main" style={{background:`url(${ assetScene })center center no-repeat`}}>     
                  <div className="assets"><img src={assetHead}/></div>
                  <div>
                    <div className="assets foreground"><img src={assetBody}/></div>
                    <div className="assets-bottom"> <img src={assetBottom}/></div>
                  </div>
              </div>
          ))}
          <button onClick={() => updateAsset()} type="button" class="btn btn-info btn-lg">Randomize</button>
      </div>
    )
  }
  
  export default RandomDude