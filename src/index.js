/* Written by Takshil Kunadia */

import { doGet } from './server/webapp';
import { onOpen } from './server/menu';
import { showSideAppScreen, analysisResult, updateSidebar } from './view/sidebar';

// Server
global.doGet = doGet;
global.onOpen = onOpen;

// Views
global.showSideAppScreen = showSideAppScreen;
global.analysisResult = analysisResult;
global.updateSidebar = updateSidebar;
