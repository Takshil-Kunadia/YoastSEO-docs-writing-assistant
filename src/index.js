/* Written by Takshil Kunadia */

import { doGet } from './server/webapp';
import { onOpen } from './server/menu';
import { showSideAppScreen } from './view/sidebar';

// Server
global.doGet = doGet;
global.onOpen = onOpen;

// Views
global.showSideAppScreen = showSideAppScreen;
