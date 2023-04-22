import { ServiceProto } from 'tsrpc-proto';
import { ReqGet, ResGet } from './recordLog/PtlGet';
import { ReqSave, ResSave } from './recordLog/PtlSave';
import { ReqUpdate, ResUpdate } from './recordLog/PtlUpdate';
import { ReqLogin, ResLogin } from './user/PtlLogin';
import { ReqLogout, ResLogout } from './user/PtlLogout';

export interface ServiceType {
    api: {
        "recordLog/Get": {
            req: ReqGet,
            res: ResGet
        },
        "recordLog/Save": {
            req: ReqSave,
            res: ResSave
        },
        "recordLog/Update": {
            req: ReqUpdate,
            res: ResUpdate
        },
        "user/Login": {
            req: ReqLogin,
            res: ResLogin
        },
        "user/Logout": {
            req: ReqLogout,
            res: ResLogout
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "services": [
        {
            "id": 0,
            "name": "recordLog/Get",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 1,
            "name": "recordLog/Save",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 2,
            "name": "recordLog/Update",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 3,
            "name": "user/Login",
            "type": "api",
            "conf": {}
        },
        {
            "id": 4,
            "name": "user/Logout",
            "type": "api",
            "conf": {}
        }
    ],
    "types": {
        "recordLog/PtlGet/ReqGet": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "base/BaseRequest": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "__ssoToken",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "recordLog/PtlGet/ResGet": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "records",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Intersection",
                            "members": [
                                {
                                    "id": 0,
                                    "type": {
                                        "type": "Partial",
                                        "target": {
                                            "target": {
                                                "type": "Reference",
                                                "target": "../models/RecordLog/RecordLog"
                                            },
                                            "keys": [
                                                "endTime"
                                            ],
                                            "type": "Pick"
                                        }
                                    }
                                },
                                {
                                    "id": 1,
                                    "type": {
                                        "target": {
                                            "type": "Reference",
                                            "target": "../models/RecordLog/RecordLog"
                                        },
                                        "keys": [
                                            "endTime"
                                        ],
                                        "type": "Omit"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "base/BaseResponse": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "__ssoToken",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "../models/RecordLog/RecordLog": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "Reference",
                        "target": "?mongodb/ObjectId"
                    }
                },
                {
                    "id": 1,
                    "name": "title",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "startTime",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 3,
                    "name": "endTime",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "recordLog/PtlSave/ReqSave": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "recordLog",
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../models/RecordLog/RecordLog"
                        },
                        "keys": [
                            "startTime",
                            "title"
                        ],
                        "type": "Pick"
                    }
                }
            ]
        },
        "recordLog/PtlSave/ResSave": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        },
        "recordLog/PtlUpdate/ReqUpdate": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "recordLog",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "_id",
                                "type": {
                                    "type": "String"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "recordLog/PtlUpdate/ResUpdate": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        },
        "user/PtlLogin/ReqLogin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "userName",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "passWord",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "user/PtlLogin/ResLogin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "__ssoToken",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "user",
                    "type": {
                        "type": "Reference",
                        "target": "../models/CurrentUser/CurrentUser"
                    }
                }
            ]
        },
        "../models/CurrentUser/CurrentUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "userName",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "roles",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "String"
                        }
                    }
                }
            ]
        },
        "user/PtlLogout/ReqLogout": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "user/PtlLogout/ResLogout": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        }
    }
};