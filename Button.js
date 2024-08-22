

 function Button({ imageUrl , title }) {
  return (
    <button title={title}>
        <img src=  {imageUrl} alt="button" srcSet="" />
    </button>
  )
}


export default Button