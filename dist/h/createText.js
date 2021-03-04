import map from "../map/index";
export default (payload) => map.set(payload['@unid'], document.createTextNode(payload.textContent));
