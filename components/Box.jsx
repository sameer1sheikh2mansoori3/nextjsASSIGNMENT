

import People from "../src/app/svg/Icon"


const Box = ({headings , paragraph , Hero}) => {
  return (
   
   <>
    <div className="rounded mx-2 my-2 border-2 border border-success d-flex flex-column w-100 p-3">
      
      <div className="d-flex">
        <People/>
        <h1 className="font-weight-bold">
            {headings}
            
        </h1>
      </div>
      <div>
        {paragraph}
      </div>
    </div>
   </>
  )
}

export default Box