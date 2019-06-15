const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

//Creamos el config Objeto que se exporta
module.exports = {
    //Le decimos el archivo donde arranca y crea una carpeta dist
    //donde dejará los archivos de producción
    entry: './src/app/index.js',
    output: {
        //Carpeta que se crea de tipo "produccion"
        path: path.join(__dirname, 'dist'),
        //nombre de archivo que es transformado: todo el código
        //que lo transforma webpack en uno solo.
        filename:'bundle.js'

    },
    //Puerto de desarrollo
    devServer: {
        port: 3000
    },
    //reglas de Webpack
    module: {
        rules: [
            {
                test: /\.css$/,
                //Esto llama el css al javascript 
                use:['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};