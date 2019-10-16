# Input component

Component types:
* button
* checkbox
* search
* submit
* text

| Input property  | Description | PropType | Required |
| ------------- | ------------- | ------------- | ------------- |
| type  | Type of input  | ```string, oneOf(['button, 'checkbox', 'search', 'submit', 'text'])``` | ```true``` |
| bgColor  | Background color  | ```string``` | ```false``` |
| containedValue  | Value of input (button, checkbox and submit)  | ```string``` | ```false``` |
| callback | Callback for button and input  | ```func``` | ```false``` |
| componentWidth  | Width of component  | ```string``` | ```false``` |
| componentHright  | Height of component  | ```string``` | ```false``` |
| placeHolder  | Placeholder for search and text  | ```string``` | ```false``` |