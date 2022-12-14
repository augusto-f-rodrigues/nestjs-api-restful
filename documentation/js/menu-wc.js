'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">updateoss documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-881fabebc67cd6e1fd42146b704141269063ef6534356aab03c4e9ea49a92a56370a2bb9c061005db109418081686275937fb5226813d548db0964405661af88"' : 'data-target="#xs-controllers-links-module-AppModule-881fabebc67cd6e1fd42146b704141269063ef6534356aab03c4e9ea49a92a56370a2bb9c061005db109418081686275937fb5226813d548db0964405661af88"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-881fabebc67cd6e1fd42146b704141269063ef6534356aab03c4e9ea49a92a56370a2bb9c061005db109418081686275937fb5226813d548db0964405661af88"' :
                                            'id="xs-controllers-links-module-AppModule-881fabebc67cd6e1fd42146b704141269063ef6534356aab03c4e9ea49a92a56370a2bb9c061005db109418081686275937fb5226813d548db0964405661af88"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-881fabebc67cd6e1fd42146b704141269063ef6534356aab03c4e9ea49a92a56370a2bb9c061005db109418081686275937fb5226813d548db0964405661af88"' : 'data-target="#xs-injectables-links-module-AppModule-881fabebc67cd6e1fd42146b704141269063ef6534356aab03c4e9ea49a92a56370a2bb9c061005db109418081686275937fb5226813d548db0964405661af88"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-881fabebc67cd6e1fd42146b704141269063ef6534356aab03c4e9ea49a92a56370a2bb9c061005db109418081686275937fb5226813d548db0964405661af88"' :
                                        'id="xs-injectables-links-module-AppModule-881fabebc67cd6e1fd42146b704141269063ef6534356aab03c4e9ea49a92a56370a2bb9c061005db109418081686275937fb5226813d548db0964405661af88"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UpdateModule.html" data-type="entity-link" >UpdateModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UpdateModule-3b9a4e18f6c92c2047561667b028582cf18c6544ff8f6b5a6a5a0fa66d394a12e98cb0dcd3d795c93707119d9cf78aa0b60a8b1c577942044d170882137a39ce"' : 'data-target="#xs-controllers-links-module-UpdateModule-3b9a4e18f6c92c2047561667b028582cf18c6544ff8f6b5a6a5a0fa66d394a12e98cb0dcd3d795c93707119d9cf78aa0b60a8b1c577942044d170882137a39ce"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UpdateModule-3b9a4e18f6c92c2047561667b028582cf18c6544ff8f6b5a6a5a0fa66d394a12e98cb0dcd3d795c93707119d9cf78aa0b60a8b1c577942044d170882137a39ce"' :
                                            'id="xs-controllers-links-module-UpdateModule-3b9a4e18f6c92c2047561667b028582cf18c6544ff8f6b5a6a5a0fa66d394a12e98cb0dcd3d795c93707119d9cf78aa0b60a8b1c577942044d170882137a39ce"' }>
                                            <li class="link">
                                                <a href="controllers/UpdateController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UpdateModule-3b9a4e18f6c92c2047561667b028582cf18c6544ff8f6b5a6a5a0fa66d394a12e98cb0dcd3d795c93707119d9cf78aa0b60a8b1c577942044d170882137a39ce"' : 'data-target="#xs-injectables-links-module-UpdateModule-3b9a4e18f6c92c2047561667b028582cf18c6544ff8f6b5a6a5a0fa66d394a12e98cb0dcd3d795c93707119d9cf78aa0b60a8b1c577942044d170882137a39ce"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UpdateModule-3b9a4e18f6c92c2047561667b028582cf18c6544ff8f6b5a6a5a0fa66d394a12e98cb0dcd3d795c93707119d9cf78aa0b60a8b1c577942044d170882137a39ce"' :
                                        'id="xs-injectables-links-module-UpdateModule-3b9a4e18f6c92c2047561667b028582cf18c6544ff8f6b5a6a5a0fa66d394a12e98cb0dcd3d795c93707119d9cf78aa0b60a8b1c577942044d170882137a39ce"' }>
                                        <li class="link">
                                            <a href="injectables/UpdateOSSService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateOSSService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UpdateV2Service.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateV2Service</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UpdateController.html" data-type="entity-link" >UpdateController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ExceptionFilterHttp.html" data-type="entity-link" >ExceptionFilterHttp</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpResponseException.html" data-type="entity-link" >HttpResponseException</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateOSSDTO.html" data-type="entity-link" >UpdateOSSDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpGrowattProvider.html" data-type="entity-link" >HttpGrowattProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpMovideskProvider.html" data-type="entity-link" >HttpMovideskProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TicketUtil.html" data-type="entity-link" >TicketUtil</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdateOSSService.html" data-type="entity-link" >UpdateOSSService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdateV2Service.html" data-type="entity-link" >UpdateV2Service</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IGrowatt.html" data-type="entity-link" >IGrowatt</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMovidesk.html" data-type="entity-link" >IMovidesk</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITicketUtil.html" data-type="entity-link" >ITicketUtil</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});