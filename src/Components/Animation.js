import React from 'react';
import { Lottie } from '@crello/react-lottie';
import animationData from './recipe.json';

const Animation = () => <Lottie config={{ animationData, autoplay: true, loop: true }} />;

export default Animation;
