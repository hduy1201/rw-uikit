import{r as o,h as r}from"./p-974560f6.js";const a=class{constructor(r){o(this,r),this.type=void 0,this.text=void 0,this.custom=void 0}render(){let o={elevated:!0,primary:"primary"===this.type,base:"base"===this.type||!this.type,success:"success"===this.type,warn:"warn"===this.type,danger:"danger"===this.type,black:"black"===this.type};return console.log(this.type),console.log(this.custom),r("button",{part:"core",class:o},this.custom?r("slot",null):this.text)}};a.style=".elevated{border-radius:var(--border-sm);border:none;outline:none;font-size:var(--base-text-size);font-family:var(--font-family);padding:var(--padding-standard);box-shadow:var(--main-shadow)}.elevated:active{box-shadow:none}.primary{background-color:var(--color-primary);color:var(--color-base)}.primary:hover{background-color:var(--color-base);color:var(--color-primary)}.primary:active{background-color:var(--color-primary);color:var(--color-base)}.success{background-color:var(--color-success);color:var(--color-base)}.success:hover{background-color:var(--color-base);color:var(--color-success)}.success:active{background-color:var(--color-success);color:var(--color-base)}.warn{background-color:var(--color-warn);color:var(--color-base)}.warn:hover{background-color:var(--color-base);color:var(--color-warn)}.warn:active{background-color:var(--color-warn);color:var(--color-base)}.danger{background-color:var(--color-danger);color:var(--color-base)}.danger:hover{background-color:var(--color-base);color:var(--color-danger)}.danger:active{background-color:var(--color-danger);color:var(--color-base)}.base{background-color:var(--color-base);color:var(--color-black)}.base:hover{background-color:var(--color-black);color:var(--color-base)}.base:active{background-color:var(--color-base);color:var(--color-black)}.black{background-color:var(--color-black);color:var(--color-base)}.black:hover{background-color:var(--color-base);color:var(--color-black)}.black:active{background-color:var(--color-black);color:var(--color-base)}";const c=class{constructor(r){o(this,r),this.type=void 0,this.text=void 0,this.custom=void 0}render(){let o={flat:!0,primary:"primary"===this.type,base:"base"===this.type||!this.type,success:"success"===this.type,warn:"warn"===this.type,danger:"danger"===this.type,black:"black"===this.type};return console.log(this.type),console.log(this.custom),r("button",{part:"core",class:o},this.custom?r("slot",null):this.text)}};c.style=".flat{border-radius:var(--border-sm);border:none;outline:none;font-size:var(--base-text-size);font-family:var(--font-family);padding:var(--padding-standard)}.primary{background-color:var(--color-primary);color:var(--color-base)}.primary:hover{background-color:var(--color-base);color:var(--color-primary)}.primary:active{background-color:var(--color-primary);color:var(--color-base)}.success{background-color:var(--color-success);color:var(--color-base)}.success:hover{background-color:var(--color-base);color:var(--color-success)}.success:active{background-color:var(--color-success);color:var(--color-base)}.warn{background-color:var(--color-warn);color:var(--color-base)}.warn:hover{background-color:var(--color-base);color:var(--color-warn)}.warn:active{background-color:var(--color-warn);color:var(--color-base)}.danger{background-color:var(--color-danger);color:var(--color-base)}.danger:hover{background-color:var(--color-base);color:var(--color-danger)}.danger:active{background-color:var(--color-danger);color:var(--color-base)}.base{background-color:var(--color-base);color:var(--color-black)}.base:hover{background-color:var(--color-black);color:var(--color-base)}.base:active{background-color:var(--color-base);color:var(--color-black)}.black{background-color:var(--color-black);color:var(--color-base)}.black:hover{background-color:var(--color-base);color:var(--color-black)}.black:active{background-color:var(--color-black);color:var(--color-base)}";export{a as rw_elevated_button,c as rw_flat_button}