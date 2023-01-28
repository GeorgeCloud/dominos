function IngredientList(props){
  const { ingredAndSetters } = props;

  return (
    <div>
      {Object.keys(ingredAndSetters).map(ingred => {
        const isSelected = ingredAndSetters[ingred][0]
        const ingredSetter = ingredAndSetters[ingred][1];
        return (
          <div key={ingred}>
            <label>
              <input
                type="checkbox"
                name={ingred}
                value={ingred}
                onChange={() => ingredSetter(!isSelected)}
              />
              {ingred}
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default IngredientList
