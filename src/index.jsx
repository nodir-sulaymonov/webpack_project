import * as $ from 'jquery'
import Post from '@models/Post';
// import xml from './assets/data.xml'
// import json from './assets/json.json'
// import csv from './assets/data.csv'
import WebpackLogo from '@/assets/webpack'
import React from 'react'
import {render} from 'react-dom'
import './styles/style.css';
import './styles/less.less'
import './styles/scss.scss'
import './babel'

const post = new Post('Webpack title', WebpackLogo)
$('pre').addClass('code2').html(post.toString());

const App = () => (
    <div className="container">
        <h1>Webpack</h1>
        <hr/>
        <div className="logo"/>
        <hr/>
        <pre/>
        <hr/>
        <div className="box">
            <h2>Less</h2>
        </div>
        <div className="card">
            <h2>SCSS</h2>
        </div>
    </div>
)

render(<App/>, document.getElementById('app'))
// console.log('Json',json)
// console.log('Xml', xml)
// console.log('csv', csv)
