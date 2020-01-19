// ==UserScript==
// @name         Fastest Flooder and Spammer 3rb.be [XLX - 2020]
// @namespace    http://tampermonkey.net/
// @version      v1
// @description  Flooder or Spammer Tool
// @author       XLX - 2020
// @include      /^http://(?:3rb)(?:\.be).+?/
// @run-at       document-end
// @grant        none
// ==/UserScript==

/**
 *
 * @Copyrights (c) XLX - 2020
 * @see <https://github.com/Cyper-New/>
 * @class (Flooder)
 * @constructor
 * @param {string} name content
 * @param {string} skin content
 * @param {string} message content
 * @param {Boolean} isSplit value
 * @link <https://www.youtube.com/channel/UC4PITCcJWvyGeqOUHF0dLQQ?view_as=subscriber>
 */

class Flooder {
    constructor(name, skin, message, isSplit = false) {
        this.skin = skin;
        this.name = name;
        this.message = message;
        this.isSplit = !!isSplit;
        this.connecter(wsUrl);
    }
    connecter(ip) {
        setInterval(async () => {
            if (ws.readyState === 1E0) {
                await wsInit(ip);
            };
        }, 0O1104);
        setInterval(() => {
            if (ws.readyState == 0O1) return play(this.name, this.skin);
        }, !!{});
        setInterval(() => {
            if (ws.readyState == 0B1) return sendChat(this.message);
        }, 0O644);
        setInterval(() => {
            if (this.isSplit == true) ws.send(new Uint8Array([0O21]))
            console.clear();
        }, [])
    }
};

window.Flooder = (Flooder);

/**
 *@Copyrights (c) XLX - 2020
 *@see <https://github.com/Cyper-New/>
 *@class HandleFlooder
 *@extends  {class} Flooder
 *@constructor
 *@link <https://www.youtube.com/channel/UC4PITCcJWvyGeqOUHF0dLQQ?view_as=subscriber>
 */
class HandleFlooder extends Flooder {
    constructor() {
        const Message = prompt('put spam content here! \n ضع نص السبام هنا'),
            Name = prompt('put spam name here \n ضع اسم بوت هنا'),
            Skin = prompt('put Spam Skin here \n ضع اسم السكن هنا'),
            isSplit = confirm('هل تريد أنقسام خلية في كل مرة؟');
        super(Name, Skin, Message, !!isSplit)
    }
    get setGUI() {
        this.HTML = (`<button type="message" class="btn btn-danger" style="
    font-size: 20px;
    font-family: fantasy;
    color: navy;
" onclick="new (HandleFlooder)();"> Start Flooder! </button>`);
        document.querySelectorAll("#footer > p")[0E0].innerHTML = (this.HTML);
    }
}
window.HandleFlooder = (HandleFlooder);
window.addEventListener('load', (HandleFlooder.prototype.setGUI));
