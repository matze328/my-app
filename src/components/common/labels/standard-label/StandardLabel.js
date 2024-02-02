function StandardLabel({ text, style, className }) {
    return (
      <label className={className} style={style}>
        {text}
      </label>
    );
  }
  
  // <label class="apfel">
  
  export default StandardLabel;