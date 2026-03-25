<a href="https://www.buymeacoffee.com/yasinkara" target="_blank">
<img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174">
</a>


# About the Scroll to Tap Button
This button moves you to the top of the page.

![recording](https:/c/i.hizliresim.com/8uzm8hf.gif)

### How to use?
1. Add the following HTML snippet anywhere inside your `body` tag:
```html
<div id="up" aria-label="Page up" role="button" tabindex="0">
    <div class="up-bg">
        <?xml version="1.0" encoding="utf-8"?>
        <svg viewBox="485.3001403808594 470.2999572753906 75.09988403320312 88.39999389648438" width="40" height="40" xmlns="http://www.w3.org/2000/svg"><path class="st7" d="M525.4,548.8l1.2-2.7h0.6l1.5,12.6l19.2-4.6V551l-12.6-7.9l25.1-6.3v-8.1l-27.7-18.1v-14.8l-1.3-2.1l-2.6,2.4&#10;&#9;&#9;l-1.2-2.2c0,0-0.4,5.2,0-0.3c0.4-5.4-1.5-14.4-1.8-16.6c-0.3-2.2-2.8-6.7-2.8-6.7h-0.3c0,0-2.6,4.5-2.8,6.7&#10;&#9;&#9;c-0.3,2.2-2.2,11.2-1.8,16.6c0.4,5.4,0,0.3,0,0.3l-1.2,2.2l-2.6-2.4l-1.3,2.1v14.8l-27.7,18.1v8.1l25.1,6.3l-12.6,7.9v3.1l19.2,4.6&#10;&#9;&#9;l1.5-12.6h0.6l1.2,2.7H525.4z" style="fill: #fff; opacity: 1;" transform="matrix(1, 0, 0, 1, -5.684341886080802e-14, -1.4210854715202004e-14)"/></svg>
    </div>
</div>
```
2. Add the `css/up.css` styles to your project (either copy the file or paste the code below):
```css
#up{
    --up-size: 75px;
    --up-right: 30px;
    --up-bottom: 59px;

    --up-img-size: calc(var(--up-size) * 0.55);

    height: var(--up-size);
    width: var(--up-size);
    z-index: 999999999;
    display: none;
    --glass-alpha: 0.16;
    --glass-border-alpha: 0.34;
    --up-accent: 0 200 255;
    background: rgba(255, 255, 255, var(--glass-alpha));
    border: 1px solid rgba(255, 255, 255, var(--glass-border-alpha));
    backdrop-filter: blur(14px) saturate(170%);
    -webkit-backdrop-filter: blur(14px) saturate(170%);
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 100%;
    position: fixed;
    right: var(--up-right);
    bottom: var(--up-bottom);
    overflow: hidden;
    box-shadow:
        0 14px 35px rgba(0, 0, 0, 0.22),
        inset 0 1px 0 rgba(255, 255, 255, 0.45),
        inset 0 -8px 18px rgba(0, 0, 0, 0.08);

    transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
}

#up::before{
    content: "";
    position: absolute;
    inset: -30%;
    background:
        radial-gradient(circle at 30% 18%, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0) 55%),
        linear-gradient(120deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0));
    transform: rotate(8deg);
    opacity: 0.9;
    pointer-events: none;
}

#up::after{
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(circle at 60% 80%, rgb(var(--up-accent) / 0.18), rgba(0, 0, 0, 0) 60%);
    pointer-events: none;
}

#up:hover{
    transform: translateY(-1px);
    box-shadow:
        0 18px 45px rgba(0, 0, 0, 0.26),
        inset 0 1px 0 rgba(255, 255, 255, 0.55),
        inset 0 -8px 18px rgba(0, 0, 0, 0.08);
}

#up:focus-visible{
    outline: 3px solid rgb(var(--up-accent) / 0.55);
    outline-offset: 3px;
}

@media (max-width: 736px){
    #up{
        --up-size: 60px;
        --up-right: 15px;
        --up-bottom: 25px;
    }
}

.up-bg{
    padding: calc(var(--up-size) * 0.2);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

#up img{
    display: block;
    width: var(--up-img-size);
    height: auto;
    margin: auto;
}

#up svg{
    display: block;
    width: var(--up-img-size);
    height: var(--up-img-size);
    margin: auto;
}

#up svg path{
    fill: #fff !important;
}

#up svg{
    filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.18));
    transition: transform 160ms ease;
}

#up i{
    transform: rotate(-90deg);
    font-size: calc(var(--up-size) * 0.46);
    color: white;
}
```
3. Add `js/pageUp.js` to your project (copy the file or paste the content) and load it with `defer`:
```html
<script defer src="js/pageUp.js"></script>
```

### Set the Button's Visibility Time
To change when the button becomes visible, update `const scrollSize = 600;` in `pageUp.js`.


### Icon or image
The button icon is included by default as an inline SVG inside `.up-bg`. You can:
- Replace the SVG inside `.up-bg` with your own (the icon color stays white).

### Change colors
If you want to customize the colors, update the following in `css/up.css`:
- Icon color (SVG): change `fill: #fff !important;` in `#up svg path`.
- Button background (glass): change `--glass-alpha` in `#up`.
- Button border: change `--glass-border-alpha` in `#up`.
- Accent glow: change `--up-accent` in `#up`.

### Remove the liquid glass effect (flat button)
To switch from the liquid glass look to a solid flat color:
- Remove/disable `backdrop-filter` in `#up` (set it to `none`).
- Delete (or comment out) `#up::before` and `#up::after`.
- Replace `background` and `border` in `#up` with your solid colors, for example:
```css
#up{
  background: #2b2b2b;
  border: 1px solid rgba(255, 255, 255, 0.22);
  box-shadow: 0 10px 25px rgba(0,0,0,0.25);
}
```


### Clone the repository
``` https://github.com/yasinkarax/scroll-to-tap-button.git ```