import { ServiceProto } from 'tsrpc-proto';
import { ReqAdd, ResAdd } from './book/PtlAdd';
import { ReqDel, ResDel } from './book/PtlDel';
import { ReqEdit, ResEdit } from './book/PtlEdit';
import { ReqGet, ResGet } from './book/PtlGet';
import { ReqAdd as ReqAdd_1, ResAdd as ResAdd_1 } from './user/PtlAdd';
import { ReqDel as ReqDel_1, ResDel as ResDel_1 } from './user/PtlDel';
import { ReqEdit as ReqEdit_1, ResEdit as ResEdit_1 } from './user/PtlEdit';
import { ReqGet as ReqGet_1, ResGet as ResGet_1 } from './user/PtlGet';

export interface ServiceType {
    api: {
        "book/Add": {
            req: ReqAdd,
            res: ResAdd
        },
        "book/Del": {
            req: ReqDel,
            res: ResDel
        },
        "book/Edit": {
            req: ReqEdit,
            res: ResEdit
        },
        "book/Get": {
            req: ReqGet,
            res: ResGet
        },
        "user/Add": {
            req: ReqAdd_1,
            res: ResAdd_1
        },
        "user/Del": {
            req: ReqDel_1,
            res: ResDel_1
        },
        "user/Edit": {
            req: ReqEdit_1,
            res: ResEdit_1
        },
        "user/Get": {
            req: ReqGet_1,
            res: ResGet_1
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 4,
    "services": [
        {
            "id": 6,
            "name": "book/Add",
            "type": "api",
            "conf": {}
        },
        {
            "id": 7,
            "name": "book/Del",
            "type": "api",
            "conf": {}
        },
        {
            "id": 8,
            "name": "book/Edit",
            "type": "api",
            "conf": {}
        },
        {
            "id": 9,
            "name": "book/Get",
            "type": "api",
            "conf": {}
        },
        {
            "id": 2,
            "name": "user/Add",
            "type": "api",
            "conf": {}
        },
        {
            "id": 3,
            "name": "user/Del",
            "type": "api",
            "conf": {}
        },
        {
            "id": 4,
            "name": "user/Edit",
            "type": "api",
            "conf": {}
        },
        {
            "id": 5,
            "name": "user/Get",
            "type": "api",
            "conf": {}
        }
    ],
    "types": {
        "book/PtlAdd/ReqAdd": {
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
                    "name": "book",
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../db/DbBook/DbBook"
                        },
                        "keys": [
                            "title",
                            "author",
                            "price"
                        ],
                        "type": "Pick"
                    }
                }
            ]
        },
        "base/BaseRequest": {
            "type": "Interface"
        },
        "../db/DbBook/DbBook": {
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
                    "name": "author",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "price",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "total",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 5,
                    "name": "create",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "time",
                                "type": {
                                    "type": "Date"
                                }
                            },
                            {
                                "id": 1,
                                "name": "uid",
                                "type": {
                                    "type": "String"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 6,
                    "name": "update",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "time",
                                "type": {
                                    "type": "Date"
                                }
                            },
                            {
                                "id": 1,
                                "name": "uid",
                                "type": {
                                    "type": "String"
                                }
                            }
                        ]
                    },
                    "optional": true
                }
            ]
        },
        "book/PtlAdd/ResAdd": {
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
                    "name": "_id",
                    "type": {
                        "type": "IndexedAccess",
                        "index": "_id",
                        "objectType": {
                            "type": "Reference",
                            "target": "../db/DbBook/DbBook"
                        }
                    }
                }
            ]
        },
        "base/BaseResponse": {
            "type": "Interface"
        },
        "book/PtlDel/ReqDel": {
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
                    "name": "_id",
                    "type": {
                        "type": "IndexedAccess",
                        "index": "_id",
                        "objectType": {
                            "type": "Reference",
                            "target": "../db/DbBook/DbBook"
                        }
                    }
                }
            ]
        },
        "book/PtlDel/ResDel": {
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
                    "name": "deletedCount",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "book/PtlEdit/ReqEdit": {
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
                    "name": "book",
                    "type": {
                        "type": "Intersection",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "target": {
                                        "type": "Reference",
                                        "target": "../db/DbBook/DbBook"
                                    },
                                    "keys": [
                                        "_id"
                                    ],
                                    "type": "Pick"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Partial",
                                    "target": {
                                        "target": {
                                            "type": "Reference",
                                            "target": "../db/DbBook/DbBook"
                                        },
                                        "keys": [
                                            "author",
                                            "price",
                                            "title"
                                        ],
                                        "type": "Pick"
                                    }
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "book/PtlEdit/ResEdit": {
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
                    "name": "msg",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "book/PtlGet/ReqGet": {
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
        "book/PtlGet/ResGet": {
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
                    "name": "books",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../db/DbBook/DbBook"
                        }
                    }
                }
            ]
        },
        "user/PtlAdd/ReqAdd": {
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
                    "name": "user",
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../db/DbUser/DbUser"
                        },
                        "keys": [
                            "age",
                            "name",
                            "role"
                        ],
                        "type": "Pick"
                    }
                }
            ]
        },
        "../db/DbUser/DbUser": {
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
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "age",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "role",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "create",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "time",
                                "type": {
                                    "type": "Date"
                                }
                            },
                            {
                                "id": 1,
                                "name": "uid",
                                "type": {
                                    "type": "String"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 5,
                    "name": "update",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "time",
                                "type": {
                                    "type": "Date"
                                }
                            },
                            {
                                "id": 1,
                                "name": "uid",
                                "type": {
                                    "type": "String"
                                }
                            }
                        ]
                    },
                    "optional": true
                }
            ]
        },
        "user/PtlAdd/ResAdd": {
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
                    "name": "_id",
                    "type": {
                        "type": "IndexedAccess",
                        "index": "_id",
                        "objectType": {
                            "type": "Reference",
                            "target": "../db/DbUser/DbUser"
                        }
                    }
                }
            ]
        },
        "user/PtlDel/ReqDel": {
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
                    "name": "_id",
                    "type": {
                        "type": "IndexedAccess",
                        "index": "_id",
                        "objectType": {
                            "type": "Reference",
                            "target": "../db/DbUser/DbUser"
                        }
                    }
                }
            ]
        },
        "user/PtlDel/ResDel": {
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
                    "name": "deletedCount",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "user/PtlEdit/ReqEdit": {
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
                    "name": "user",
                    "type": {
                        "type": "Intersection",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "target": {
                                        "type": "Reference",
                                        "target": "../db/DbUser/DbUser"
                                    },
                                    "keys": [
                                        "_id"
                                    ],
                                    "type": "Pick"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Partial",
                                    "target": {
                                        "target": {
                                            "type": "Reference",
                                            "target": "../db/DbUser/DbUser"
                                        },
                                        "keys": [
                                            "name",
                                            "age"
                                        ],
                                        "type": "Pick"
                                    }
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "user/PtlEdit/ResEdit": {
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
        "user/PtlGet/ReqGet": {
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
        "user/PtlGet/ResGet": {
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
                    "name": "users",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../db/DbUser/DbUser"
                        }
                    }
                }
            ]
        }
    }
};