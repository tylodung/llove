import ReactGA from 'react-ga';
ReactGA.initialize('UA-here-2');

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname);
};
