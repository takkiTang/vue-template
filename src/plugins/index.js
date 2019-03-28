const pluginsContext = require.context("./", true, /\.js$/);

const importAll = pluginsContext => {
  pluginsContext.keys().map(plugin => {
    if (plugin.startsWith("./index")) return;
    pluginsContext(plugin.default || plugin);
  });
};

importAll(pluginsContext);
