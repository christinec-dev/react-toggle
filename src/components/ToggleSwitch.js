import React, {useState} from "react";

//Reusable component that will render custom true/false component values
export default function ToggleSwitch(props) {
    const [checked, setChecked] = useState(props.defaultChecked);
    const [Text] = useState(props.Text);

   function onChange(evt) {
       setChecked(evt.target.value);
        if (props.onToggleChange)
            props.onToggleChange(checked);
   }

    return(
        /*boolean value that determines if it pops up or not */
        <div className={"toggle toggle-switch"}>
        <input
          type="checkbox"
          name={props.Name}
          className="toggle-switch-checkbox"
          id={props.id}
          defaultChecked={checked}
          onChange={onChange}
        />

        {/* ID that’s going to be passed to the checkbox input control */}
        {props.id ? (
          <label className="toggle-switch-label" htmlFor={props.id}>
            <span
                className={
                    props.disabled
                    ? "toggle-switch-inner toggle-switch-disabled"
                    : "toggle-switch-inner"
                }
              
                data-yes={Text[0]}
                data-no={Text[1]}
            />
            
            <span
              className={
                props.disabled
                  ? "toggle-switch-switch toggle-switch-disabled"
                  : "toggle-switch-switch"
              }
            />
          </label>
        ) : null}
      </div>
    )
}