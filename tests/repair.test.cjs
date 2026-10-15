const { readFileSync } = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const text = readFileSync('app.js', 'utf8');
const code = text.slice(text.indexOf('function rectPixels('), text.indexOf('const tiny='));
const box = vm.createContext({Uint8ClampedArray,Math});
vm.runInContext(code,box);
function context(w,h){const pixels=new Uint8ClampedArray(w*h*4);for(let i=0;i<pixels.length;i+=4){pixels.set([40,80,120,255],i);}return{pixels,getImageData(x,y,rw,rh){const data=new Uint8ClampedArray(rw*rh*4);for(let yy=0;yy<rh;yy++)for(let xx=0;xx<rw;xx++)data.set(pixels.slice(((yy+y)*w+xx+x)*4,((yy+y)*w+xx+x)*4+4),(yy*rw+xx)*4);return{data,width:rw,height:rh};},putImageData(image,x,y){for(let yy=0;yy<image.height;yy++)for(let xx=0;xx<image.width;xx++)pixels.set(image.data.slice((yy*image.width+xx)*4,(yy*image.width+xx)*4+4),((yy+y)*w+xx+x)*4);}};}
const c=context(20,20);for(let y=7;y<13;y++)for(let x=6;x<14;x++)c.pixels.set([255,255,255,255],(y*20+x)*4);box.repair(c,20,20,[{x:.3,y:.35,w:.4,h:.3}],0);for(let i=0;i<c.pixels.length;i+=4)assert.deepEqual([...c.pixels.slice(i,i+4)],[40,80,120,255]);console.log('PASS: watermark removed from solid background; all unselected pixels unchanged');
for(const r of [{x:0,y:0,w:.2,h:.2},{x:.8,y:.8,w:.2,h:.2},{x:0,y:0,w:1,h:1}]){const c=context(20,20);box.repair(c,20,20,[r],4);assert.equal(c.pixels.filter((_,i)=>i%4===3).every(a=>a===255),true);assert.equal(c.pixels[0],40);}console.log('PASS: edge and full-frame masks remain bounded and preserve alpha');
const b=box.rectPixels({x:.999,y:.999,w:.5,h:.5},20,20);assert.equal(b.x,19);assert.equal(b.y,19);assert.equal(b.w,1);assert.equal(b.h,1);console.log('PASS: pixel coordinates clamp to image bounds');
