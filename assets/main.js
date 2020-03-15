import { hello, addImage } from "./js/common"
import imageProfile from "./img/profile.jpg"
import "./css/main.css"
import $ from "jquery"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.css"

let body = $('body')
$('body').html('<h1><i class="fa fa-user"></i> Hello this is me Mohammed</h1>')

hello('Ali')
addImage(imageProfile)