
/**
 * smooth
 */

var smooth = module.exports = {
  render: function (e, a) {
    e.mesh.pos.set(v(e.prevPos).lerp(e.pos, a))
  }
}
