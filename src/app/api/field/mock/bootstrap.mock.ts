import { BackgroundMockFields } from "./bootstrap/background.mock";
import { BorderMockFields } from "./bootstrap/border.mock";
import { ColorsMockFields } from "./bootstrap/color.mock";

export const bootstrap = [
  {
    id: 'borders',
    fields: BorderMockFields,
    data: {},
    info: {
      title: 'Borders',
      content: 'Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.'
    }
  },
  {
    id: 'backgrounds',
    fields: BackgroundMockFields,
    data: {},
    info: {
      title: 'Background',
      content: 'Convey meaning through background-color and add decoration with gradients.'
    } 
  },
  {
    id: 'colors',
    fields: ColorsMockFields,
    data: {},
    info: {
      title: 'Background',
      content: 'Convey meaning through background-color and add decoration with gradients.'
    } 
  },

  
]
