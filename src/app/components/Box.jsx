

import People from "../svg/People"


const Box = ({headings , paragraph}) => {
  return (
   
   <>
    <div className="rounded border-2 border border-success d-flex flex-column">
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