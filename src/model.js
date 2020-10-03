import image from './assets/image.jpg'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

const text = `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ullamcorper eget nulla facilisi etiam dignissim diam. Urna porttitor rhoncus dolor purus non enim praesent elementum. Ipsum suspendisse ultrices gravida dictum fusce. Nisl suscipit adipiscing bibendum est ultricies integer. Urna cursus eget nunc scelerisque viverra mauris. Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. At ultrices mi tempus imperdiet. Vitae et leo duis ut diam quam nulla. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Ac tortor vitae purus faucibus ornare suspendisse. Facilisis sed odio morbi quis commodo odio aenean. Malesuada proin libero nunc consequat interdum. Magna fermentum iaculis eu non. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Et egestas quis ipsum suspendisse ultrices gravida.</p>
`

export const model = [
  new TitleBlock('Конструктор сайтов на чистом JavaScript', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: 'green',
      padding: '1.5rem',
      'text-align': 'center'
    }
  }),
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '500px',
      height: 'auto'
    },
    alt: 'Это картинка'
  }),
  new ColumnsBlock([
    'Приложение на чистом JavaScript, без использования библиотек',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  ], {
    styles: {
      background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
      padding: '2rem',
      color: '#fff',
      'font-weight': 'bold'
    }
  }),
  new TextBlock(text, {
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold'
    }
  })
]