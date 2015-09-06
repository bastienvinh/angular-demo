"use strict";

/**
 * contains all index keys for getUrl
 * @type {{QUERY_DB: string}}
 */
const JsonQueryPath = {

    QUERY_DB : 'DBJSON'

};


/**
 * Class to manage jsonServer connection
 */
let JsonServerUtils = (function () {

    let tokenToCreateInstance = Symbol('JsonServerUtilsTroublesome');

    // Class declaration

    class JsonServerUtilsClass
    {
        constructor( tag ) {
            if ( tag != tokenToCreateInstance ) throw new Error("Impossible to create a instance");

            // TODO : create system with configuration files

            // Init data
            this['server'] = 'http://localhost:3000';

            // Our address storage
            this['cached_urls'] = new Map();
            this['cached_urls'].set( JsonQueryPath.QUERY_DB, `${ this['server'] }/db` );
        }

        static getInstance()
        {
            if (this['instance'] == undefined || this['instance'] == null)
                this['instance'] = new JsonServerUtilsClass( tokenToCreateInstance );

            return this['instance'];
        }

        static createUrlService( queryPath ) {
            return `${ JsonServerUtilsClass.getInstance().server }/${ queryPath }}`;
        }

        // TODO : Create a function to add and remove Url from Cached urls

        /**
         * retrieve Url on Cache
         * @param index
         * @returns {String}
         */
        static getUrl( index )
        {
            return JsonServerUtilsClass.getInstance().internalGetUrl( tokenToCreateInstance, index );
        }


        /******* PRIVATE ********/

        internalGetUrl(identifier, index )
        {
            if ( identifier != tokenToCreateInstance )
                throw new Error("Sorry private function");

            if (index == undefined || index == null || !this['cached_urls'].has( index ))
                throw new Error( "Index key don't exists." );

            return this['cached_urls'].get( index );
        }

        /**** END PRIVATE ********/
    }


    // Creates properties

    /**
     * Server Address
     */
    Object.defineProperty( JsonServerUtilsClass.prototype, "ServerAddress", {
        get: function () {
            return this['server'];
        },
        enumerable: false,
        configurable:false
    });


    return JsonServerUtilsClass;
})();

