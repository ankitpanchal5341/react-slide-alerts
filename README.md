# The react-slide-alerts have beautiful alerts with a slide animation & color background overlays with many options

## Description


The react-slide-alerts is dependent on Material-UI  [@mui](https://mui.com)
## Live Demo

Take a look at [Live Demo](http://ankitpanchal.in/react-slide-alerts)

## Installation

```shell
npm install react-slide-alerts
```

**Note:**

You will need to have `@mui` installed, in order to use this component

```shell
npm install @mui/material @emotion/react @emotion/styled
```

## Usage Example

```jsx
import SlideAlert from "react-slide-alerts";
import { useState } from "react";
export default function App() {
  const [show, setShowAlert] = useState(false);

  return (
    <div className="App">
      <SlideAlert
        open={show}
        message="Thanks for installing react-slide-alerts !"
        type="success"
        onClose={()=>setShowAlert(false)}
      />
      <button onClick={() => setShowAlert(true)}>Show</button>
    </div>
  );
}

```

## Props

| Name  | Options  | Default | Description  |
| ----- | --------- | --------- | --------- |
| type | 'success' \| 'error' \| 'info' \| 'warning' | "info" | This indicates the type of the alert. if type is not provided by user then the default type for the alert will be info. |
| direction | 'up' \| 'down' \| 'left' \| 'right' | "up" | This indicates the direction of alert. alert box will animate & enter on the screen based on provided value . if any value not provided the alert will enter from up to center by default|
| message | "String" | null | In message props you have to pass that message you want to display on screen . it should be a valid String|
| open | Boolean (true/false) | false | if true the alert will render on screen . if false the alert will hide|
| onClose | function() / ()=>{} | null | pass any function who handle the alert state , when alert should visible & when the alert should not visible |
| disableBgColor | Boolean(true/false) | true | just pass the disableBgColor props to hide that background overley on  screen.  |

#### You can fully customise alerts according to your needs.😊

## Example
### Alert Types
![IMAGE](https://ankitpanchal.in/1.gif)

### Alert Directions

![IMAGE](https://ankitpanchal.in/2.gif)
## License

Open Source Project. You can contribute.

## Author

[Ankit Panchal](http://ankitpanchal.in)