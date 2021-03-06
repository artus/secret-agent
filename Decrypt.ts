import NodeRSA = require('node-rsa');

export class Decrypt
{
    readonly encryptedText = "NShTJwH1xpM9Y/hA9vg0RVXjFXGv9dkqPbGepn3/RPcJ4XE28LaP6N0VJSJt2bkXxVtGmz3/Nxvd03Uo4BGfHnwNd++HCvK7NrAZ4hqgG/Kg4Es/pl6six4vMGppL2EhTpX8Jv1qEeXXXr6Ib2egMW2f2429G6jPHSyvtOSZWqI="
    
    private _firstPart  = "";
    private _secondPart = "";
    private _thirdPart  = "";
    private _fourthPart = "";
    
    constructor()
    {
        // Do nothing as of yet.
    }
    
    set firstPart(part : string)
    {
        this._firstPart = part;
    }
    
    set secondPart(part : string)
    {
        this._secondPart = part;
    }
    
    set thirdPart(part : string)
    {
        this._thirdPart = part;
    }
    
    set fourthPart(part : string)
    {
        this._fourthPart = part;
    }
    
    get publicKey() : string
    {
        let key = '-----BEGIN PUBLIC KEY-----\n';
        
        key += this._firstPart;
        key += this._secondPart + '\n';
        key += this._thirdPart;
        key += this._fourthPart + '\n';
        key += '-----END PUBLIC KEY-----'
        
        return key;
    }
    
    get decryptedString() : string
    {
        let result = "";
        
        try
        {
            let key = new NodeRSA({b: 512});
            key.importKey(this.publicKey, 'public');
            result = key.decryptPublic(this.encryptedText, 'utf8');
            
            alert("Good job agent! Now go on and solve the rest. Your knighthood awaits.");
        } 
        catch(e)
        {
            alert("You did not enter the right key, or did something else wrong.\nDon't try to fool us, deserters will be shot.");
        }
        
        return result;
    }
}