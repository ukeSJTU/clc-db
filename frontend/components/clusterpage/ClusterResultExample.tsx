"use client";

import React from "react";
import ReactEcharts from "echarts-for-react";

const ClusterDemoChart = () => {
    const option = {
        animation: true,
        animationThreshold: 2000,
        animationDuration: 1000,
        animationEasing: "cubicOut",
        animationDelay: 0,
        animationDurationUpdate: 300,
        animationEasingUpdate: "cubicOut",
        animationDelayUpdate: 0,
        aria: {
            enabled: false,
        },
        color: [
            "#5470c6",
            "#91cc75",
            "#fac858",
            "#ee6666",
            "#73c0de",
            "#3ba272",
            "#fc8452",
            "#9a60b4",
            "#ea7ccc",
        ],
        series: [
            {
                type: "scatter",
                name: "class-0",
                symbolSize: 10,
                data: [
                    [
                        -0.27357036,
                        10.560959,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/894493-95-9.png \' alt="894493-95-9" height="250" width="250">',
                    ],
                    [
                        -4.8024154,
                        5.5347795,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1450841-27-6.png \' alt="1450841-27-6" height="250" width="250">',
                    ],
                    [
                        -1.0102756,
                        -8.582099,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/32959-62-9.png \' alt="32959-62-9" height="250" width="250">',
                    ],
                    [
                        -5.3841267,
                        -5.8102837,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828432-09-1.png \' alt="2828432-09-1" height="250" width="250">',
                    ],
                    [
                        -13.240743,
                        8.603555,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/70774-28-6.png \' alt="70774-28-6" height="250" width="250">',
                    ],
                    [
                        6.731437,
                        -10.064029,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/503538-68-9.png \' alt="503538-68-9" height="250" width="250">',
                    ],
                    [
                        1.2670817,
                        7.607524,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/135616-36-3.png \' alt="135616-36-3" height="250" width="250">',
                    ],
                    [
                        4.574829,
                        0.9212944,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/111822-69-6.png \' alt="111822-69-6" height="250" width="250">',
                    ],
                    [
                        -9.712303,
                        0.9902761,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/695816-47-8.png \' alt="695816-47-8" height="250" width="250">',
                    ],
                    [
                        -5.742546,
                        -4.0137763,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828432-02-4.png \' alt="2828432-02-4" height="250" width="250">',
                    ],
                    [
                        -7.863218,
                        1.1888102,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1380079-15-1.png \' alt="1380079-15-1" height="250" width="250">',
                    ],
                    [
                        8.144207,
                        -0.3451327,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-08-0.png \' alt="2757083-08-0" height="250" width="250">',
                    ],
                    [
                        -3.512856,
                        12.230579,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/122833-58-3.png \' alt="122833-58-3" height="250" width="250">',
                    ],
                    [
                        -6.6578,
                        11.631211,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-64-3.png \' alt="2565792-64-3" height="250" width="250">',
                    ],
                    [
                        -9.924701,
                        1.5485927,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1044256-04-3.png \' alt="1044256-04-3" height="250" width="250">',
                    ],
                    [
                        -15.704439,
                        6.423717,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1827669-27-1.png \' alt="1827669-27-1" height="250" width="250">',
                    ],
                    [
                        -3.4672933,
                        -4.8781443,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2133827-34-4.png \' alt="2133827-34-4" height="250" width="250">',
                    ],
                    [
                        -2.4649017,
                        6.3619533,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/114026-76-5.png \' alt="114026-76-5" height="250" width="250">',
                    ],
                    [
                        0.20476817,
                        4.8284597,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1315511-05-7.png \' alt="1315511-05-7" height="250" width="250">',
                    ],
                    [
                        -8.241678,
                        1.6198461,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/136735-95-0.png \' alt="136735-95-0" height="250" width="250">',
                    ],
                    [
                        -9.453879,
                        10.319498,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/191480-61-2.png \' alt="191480-61-2" height="250" width="250">',
                    ],
                    [
                        -0.08141271,
                        7.7112765,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/151433-25-9.png \' alt="151433-25-9" height="250" width="250">',
                    ],
                    [
                        0.72822666,
                        -2.2688532,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/138517-66-5.png \' alt="138517-66-5" height="250" width="250">',
                    ],
                    [
                        3.1042273,
                        2.6202292,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/163061-73-2.png \' alt="163061-73-2" height="250" width="250">',
                    ],
                    [
                        -3.0440443,
                        9.940971,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/174291-96-4.png \' alt="174291-96-4" height="250" width="250">',
                    ],
                    [
                        2.1633284,
                        -10.216204,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/41051-90-5.png \' alt="41051-90-5" height="250" width="250">',
                    ],
                    [
                        -3.3365624,
                        4.8868403,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/71042-54-1.png \' alt="71042-54-1" height="250" width="250">',
                    ],
                    [
                        6.423622,
                        -10.675614,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/445467-61-8.png \' alt="445467-61-8" height="250" width="250">',
                    ],
                    [
                        -13.225155,
                        -7.5522385,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1908437-58-0.png \' alt="1908437-58-0" height="250" width="250">',
                    ],
                    [
                        -1.5479025,
                        3.807035,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/452304-59-5.png \' alt="452304-59-5" height="250" width="250">',
                    ],
                    [
                        -2.6750274,
                        -5.0178056,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828432-01-3.png \' alt="2828432-01-3" height="250" width="250">',
                    ],
                    [
                        -0.24663366,
                        -2.630043,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828432-26-2.png \' alt="2828432-26-2" height="250" width="250">',
                    ],
                    [
                        10.334603,
                        -0.14518057,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/656233-47-5.png \' alt="656233-47-5" height="250" width="250">',
                    ],
                    [
                        2.545587,
                        -6.3755774,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/157904-66-0.png \' alt="157904-66-0" height="250" width="250">',
                    ],
                    [
                        9.492445,
                        -2.4423716,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/37002-48-5.png \' alt="37002-48-5" height="250" width="250">',
                    ],
                    [
                        -13.421978,
                        6.5034647,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/149646-83-3.png \' alt="149646-83-3" height="250" width="250">',
                    ],
                    [
                        1.9844925,
                        -1.634532,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/863491-46-7.png \' alt="863491-46-7" height="250" width="250">',
                    ],
                    [
                        9.023314,
                        4.074887,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2162939-87-7.png \' alt="2162939-87-7" height="250" width="250">',
                    ],
                    [
                        -6.410857,
                        5.8434873,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/155155-73-0.png \' alt="155155-73-0" height="250" width="250">',
                    ],
                    [
                        2.5208015,
                        2.0247607,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/136030-00-7.png \' alt="136030-00-7" height="250" width="250">',
                    ],
                    [
                        -3.0723286,
                        0.77236795,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/796966-15-9.png \' alt="796966-15-9" height="250" width="250">',
                    ],
                    [
                        -0.59507823,
                        6.611104,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/21436-03-3.png \' alt="21436-03-3" height="250" width="250">',
                    ],
                    [
                        -15.859451,
                        -3.8272588,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2207601-04-3.png \' alt="2207601-04-3" height="250" width="250">',
                    ],
                    [
                        -1.2712848,
                        10.855387,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/67198-21-4.png \' alt="67198-21-4" height="250" width="250">',
                    ],
                    [
                        -2.609144,
                        -0.3816755,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/94041-16-4.png \' alt="94041-16-4" height="250" width="250">',
                    ],
                    [
                        -4.732308,
                        13.5948,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/68737-65-5.png \' alt="68737-65-5" height="250" width="250">',
                    ],
                    [
                        -11.236738,
                        6.925058,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-69-8.png \' alt="2565792-69-8" height="250" width="250">',
                    ],
                    [
                        7.782479,
                        3.0410876,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2129645-31-2.png \' alt="2129645-31-2" height="250" width="250">',
                    ],
                    [
                        -14.302649,
                        3.7781234,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828440-24-8.png \' alt="2828440-24-8" height="250" width="250">',
                    ],
                    [
                        0.7793026,
                        9.085281,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/913706-72-6.png \' alt="913706-72-6" height="250" width="250">',
                    ],
                    [
                        1.2295063,
                        -3.0525134,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828432-25-1.png \' alt="2828432-25-1" height="250" width="250">',
                    ],
                    [
                        -7.8319774,
                        -8.008751,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757085-87-1.png \' alt="2757085-87-1" height="250" width="250">',
                    ],
                    [
                        5.092164,
                        5.1110635,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2648055-07-4.png \' alt="2648055-07-4" height="250" width="250">',
                    ],
                    [
                        -1.1422447,
                        4.942546,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/216394-06-8.png \' alt="216394-06-8" height="250" width="250">',
                    ],
                    [
                        12.517734,
                        1.9452575,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/223259-62-9.png \' alt="223259-62-9" height="250" width="250">',
                    ],
                    [
                        3.0454469,
                        4.2025433,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2229836-07-9.png \' alt="2229836-07-9" height="250" width="250">',
                    ],
                    [
                        0.7094363,
                        0.11538801,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/795290-34-5.png \' alt="795290-34-5" height="250" width="250">',
                    ],
                    [
                        -15.872228,
                        -2.7598877,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2448341-44-2.png \' alt="2448341-44-2" height="250" width="250">',
                    ],
                    [
                        5.334814,
                        -7.2915177,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/244261-66-3.png \' alt="244261-66-3" height="250" width="250">',
                    ],
                    [
                        -7.5157685,
                        -5.2509594,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2361262-50-0.png \' alt="2361262-50-0" height="250" width="250">',
                    ],
                    [
                        9.502299,
                        -6.2851124,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/242804-50-8.png \' alt="242804-50-8" height="250" width="250">',
                    ],
                    [
                        -1.1446877,
                        12.927467,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/53152-68-4.png \' alt="53152-68-4" height="250" width="250">',
                    ],
                    [
                        3.1600523,
                        -2.5454245,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/138517-65-4.png \' alt="138517-65-4" height="250" width="250">',
                    ],
                    [
                        -6.1158557,
                        13.223773,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1150113-66-8.png \' alt="1150113-66-8" height="250" width="250">',
                    ],
                    [
                        -9.988069,
                        10.075026,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/143443-23-6.png \' alt="143443-23-6" height="250" width="250">',
                    ],
                    [
                        6.4687877,
                        4.1226945,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2648055-13-2.png \' alt="2648055-13-2" height="250" width="250">',
                    ],
                    [
                        -0.041526776,
                        -3.8940992,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2468233-72-7.png \' alt="2468233-72-7" height="250" width="250">',
                    ],
                    [
                        -1.9466717,
                        2.6547666,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/573700-23-9.png \' alt="573700-23-9" height="250" width="250">',
                    ],
                    [
                        -10.466734,
                        0.40226454,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1314246-02-0.png \' alt="1314246-02-0" height="250" width="250">',
                    ],
                    [
                        8.200205,
                        -3.5398662,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/300811-56-7.png \' alt="300811-56-7" height="250" width="250">',
                    ],
                    [
                        7.2759776,
                        -5.121133,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/147700-62-7.png \' alt="147700-62-7" height="250" width="250">',
                    ],
                    [
                        -0.5600352,
                        8.663199,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/179337-54-3.png \' alt="179337-54-3" height="250" width="250">',
                    ],
                    [
                        -0.8844349,
                        6.530579,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1436-59-5.png \' alt="1436-59-5" height="250" width="250">',
                    ],
                    [
                        5.3413415,
                        7.5893483,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/861909-53-7.png \' alt="861909-53-7" height="250" width="250">',
                    ],
                    [
                        -10.309163,
                        -4.4749856,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/139021-82-2.png \' alt="139021-82-2" height="250" width="250">',
                    ],
                    [
                        10.859867,
                        2.314061,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1372719-98-6.png \' alt="1372719-98-6" height="250" width="250">',
                    ],
                    [
                        -5.8923063,
                        7.2467775,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1223020-29-8.png \' alt="1223020-29-8" height="250" width="250">',
                    ],
                    [
                        -6.267976,
                        -9.809862,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-38-3.png \' alt="2757082-38-3" height="250" width="250">',
                    ],
                    [
                        -4.502967,
                        14.690569,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-83-3.png \' alt="2634687-83-3" height="250" width="250">',
                    ],
                    [
                        -3.511088,
                        -2.1709669,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757084-55-0.png \' alt="2757084-55-0" height="250" width="250">',
                    ],
                    [
                        3.5793927,
                        4.9668517,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2635339-84-1.png \' alt="2635339-84-1" height="250" width="250">',
                    ],
                    [
                        3.0431433,
                        -11.229191,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/34052-90-9.png \' alt="34052-90-9" height="250" width="250">',
                    ],
                    [
                        -1.5798116,
                        -1.6594232,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/229184-96-7.png \' alt="229184-96-7" height="250" width="250">',
                    ],
                    [
                        7.779702,
                        5.4926662,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1384535-76-5.png \' alt="1384535-76-5" height="250" width="250">',
                    ],
                    [
                        10.657534,
                        -4.563509,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2411176-84-4.png \' alt="2411176-84-4" height="250" width="250">',
                    ],
                    [
                        -6.38354,
                        0.13461149,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/185913-97-7.png \' alt="185913-97-7" height="250" width="250">',
                    ],
                    [
                        13.290365,
                        0.99563754,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/528521-89-3.png \' alt="528521-89-3" height="250" width="250">',
                    ],
                    [
                        9.925103,
                        -2.3830657,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/32305-98-9.png \' alt="32305-98-9" height="250" width="250">',
                    ],
                    [
                        5.8086863,
                        -0.5265998,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/866081-62-1.png \' alt="866081-62-1" height="250" width="250">',
                    ],
                    [
                        2.6368136,
                        2.8320913,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/126456-43-7.png \' alt="126456-43-7" height="250" width="250">',
                    ],
                    [
                        -5.042032,
                        7.3486013,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/53912-80-4.png \' alt="53912-80-4" height="250" width="250">',
                    ],
                    [
                        5.3359466,
                        -7.48814,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/210169-54-3.png \' alt="210169-54-3" height="250" width="250">',
                    ],
                    [
                        0.5656254,
                        5.7982326,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/74111-21-0.png \' alt="74111-21-0" height="250" width="250">',
                    ],
                    [
                        9.065544,
                        1.6748104,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-55-2.png \' alt="2565792-55-2" height="250" width="250">',
                    ],
                    [
                        2.3488557,
                        -3.875813,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1152313-76-2.png \' alt="1152313-76-2" height="250" width="250">',
                    ],
                    [
                        5.0429983,
                        3.7203116,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/229177-78-0.png \' alt="229177-78-0" height="250" width="250">',
                    ],
                    [
                        1.1003605,
                        6.4122148,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/931-16-8.png \' alt="931-16-8" height="250" width="250">',
                    ],
                    [
                        -5.032889,
                        11.7400675,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1346683-42-8.png \' alt="1346683-42-8" height="250" width="250">',
                    ],
                    [
                        -1.1249156,
                        -7.868758,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/59049-84-2.png \' alt="59049-84-2" height="250" width="250">',
                    ],
                    [
                        -4.020829,
                        8.46696,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/22795-99-9.png \' alt="22795-99-9" height="250" width="250">',
                    ],
                    [
                        -12.549292,
                        -7.304393,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/897942-79-9.png \' alt="897942-79-9" height="250" width="250">',
                    ],
                    [
                        2.4792058,
                        1.9799783,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/7480-35-5.png \' alt="7480-35-5" height="250" width="250">',
                    ],
                    [
                        -1.880195,
                        12.125326,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/767291-67-8.png \' alt="767291-67-8" height="250" width="250">',
                    ],
                    [
                        -1.0442289,
                        5.9637523,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1121-22-8.png \' alt="1121-22-8" height="250" width="250">',
                    ],
                    [
                        -2.2582366,
                        5.3442593,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/71042-55-2.png \' alt="71042-55-2" height="250" width="250">',
                    ],
                    [
                        6.961533,
                        0.9641475,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/213843-90-4.png \' alt="213843-90-4" height="250" width="250">',
                    ],
                    [
                        1.5242714,
                        -1.3396034,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1221973-02-9.png \' alt="1221973-02-9" height="250" width="250">',
                    ],
                    [
                        12.842947,
                        -0.84542906,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1298133-36-4.png \' alt="1298133-36-4" height="250" width="250">',
                    ],
                    [
                        -11.914839,
                        5.097675,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/217648-61-8.png \' alt="217648-61-8" height="250" width="250">',
                    ],
                    [
                        -9.46534,
                        -7.218343,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/157904-67-1.png \' alt="157904-67-1" height="250" width="250">',
                    ],
                    [
                        1.1003826,
                        6.4130383,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/6982-39-4.png \' alt="6982-39-4" height="250" width="250">',
                    ],
                    [
                        -3.9862528,
                        13.748409,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/87583-89-9.png \' alt="87583-89-9" height="250" width="250">',
                    ],
                    [
                        1.2377563,
                        1.5445758,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1091606-70-0.png \' alt="1091606-70-0" height="250" width="250">',
                    ],
                    [
                        -5.182296,
                        9.747904,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/155726-05-9.png \' alt="155726-05-9" height="250" width="250">',
                    ],
                    [
                        1.3444386,
                        4.602046,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/299187-61-4.png \' alt="299187-61-4" height="250" width="250">',
                    ],
                    [
                        -5.293295,
                        2.0571299,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1092695-14-1.png \' alt="1092695-14-1" height="250" width="250">',
                    ],
                    [
                        -8.578939,
                        2.5859523,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/147253-67-6.png \' alt="147253-67-6" height="250" width="250">',
                    ],
                    [
                        0.03647512,
                        3.3795931,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/960128-64-7.png \' alt="960128-64-7" height="250" width="250">',
                    ],
                    [
                        -7.534109,
                        7.323642,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/528565-79-9.png \' alt="528565-79-9" height="250" width="250">',
                    ],
                    [
                        -12.990907,
                        -2.6079879,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2416226-68-9.png \' alt="2416226-68-9" height="250" width="250">',
                    ],
                    [
                        4.0317774,
                        -10.392516,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/699006-54-7.png \' alt="699006-54-7" height="250" width="250">',
                    ],
                    [
                        -1.6005492,
                        -3.179397,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2680585-79-7.png \' alt="2680585-79-7" height="250" width="250">',
                    ],
                    [
                        3.7650044,
                        -0.7341723,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/94041-18-6.png \' alt="94041-18-6" height="250" width="250">',
                    ],
                    [
                        -3.4846356,
                        10.663151,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/143585-47-1.png \' alt="143585-47-1" height="250" width="250">',
                    ],
                    [
                        6.1485095,
                        2.4421477,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2370958-37-3.png \' alt="2370958-37-3" height="250" width="250">',
                    ],
                    [
                        -4.7328115,
                        13.593634,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/67579-81-1.png \' alt="67579-81-1" height="250" width="250">',
                    ],
                    [
                        3.261707,
                        -8.899656,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/945852-48-2.png \' alt="945852-48-2" height="250" width="250">',
                    ],
                    [
                        -8.050155,
                        -3.039974,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757084-49-2.png \' alt="2757084-49-2" height="250" width="250">',
                    ],
                    [
                        -4.498616,
                        3.9599943,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/874297-58-2.png \' alt="874297-58-2" height="250" width="250">',
                    ],
                    [
                        -3.3292725,
                        1.1548384,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/850409-83-5.png \' alt="850409-83-5" height="250" width="250">',
                    ],
                    [
                        -0.96617615,
                        1.7108248,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/486429-92-9.png \' alt="486429-92-9" height="250" width="250">',
                    ],
                    [
                        -8.709818,
                        6.0594845,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/824395-67-7.png \' alt="824395-67-7" height="250" width="250">',
                    ],
                    [
                        4.2787232,
                        7.10693,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/226393-33-5.png \' alt="226393-33-5" height="250" width="250">',
                    ],
                    [
                        -15.326271,
                        -4.749287,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2444702-33-2.png \' alt="2444702-33-2" height="250" width="250">',
                    ],
                    [
                        -1.7030516,
                        -8.732492,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/24613-98-7.png \' alt="24613-98-7" height="250" width="250">',
                    ],
                    [
                        2.4188406,
                        0.58163613,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1091606-69-7.png \' alt="1091606-69-7" height="250" width="250">',
                    ],
                    [
                        -11.296029,
                        9.408988,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/928769-12-4.png \' alt="928769-12-4" height="250" width="250">',
                    ],
                    [
                        -2.2267106,
                        3.6838102,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/452304-63-1.png \' alt="452304-63-1" height="250" width="250">',
                    ],
                    [
                        5.0068917,
                        -2.4155133,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2160535-59-9.png \' alt="2160535-59-9" height="250" width="250">',
                    ],
                    [
                        1.8174348,
                        8.794863,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/136705-63-0.png \' alt="136705-63-0" height="250" width="250">',
                    ],
                    [
                        11.778732,
                        0.80053556,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/528521-86-0.png \' alt="528521-86-0" height="250" width="250">',
                    ],
                    [
                        3.8102934,
                        6.457929,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/474049-73-5.png \' alt="474049-73-5" height="250" width="250">',
                    ],
                    [
                        0.19266902,
                        2.9118102,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1222630-45-6.png \' alt="1222630-45-6" height="250" width="250">',
                    ],
                    [
                        -4.3081,
                        -7.641946,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-45-5.png \' alt="2757083-45-5" height="250" width="250">',
                    ],
                    [
                        -4.482952,
                        0.06719027,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/123287-35-4.png \' alt="123287-35-4" height="250" width="250">',
                    ],
                    [
                        2.2774534,
                        2.8132832,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/163061-74-3.png \' alt="163061-74-3" height="250" width="250">',
                    ],
                    [
                        -1.4940914,
                        -5.1303916,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1656253-81-4.png \' alt="1656253-81-4" height="250" width="250">',
                    ],
                    [
                        -16.564186,
                        1.5483978,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1095419-61-6.png \' alt="1095419-61-6" height="250" width="250">',
                    ],
                    [
                        -5.173458,
                        9.727533,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/84466-85-3.png \' alt="84466-85-3" height="250" width="250">',
                    ],
                    [
                        -9.793739,
                        7.7419877,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/138517-61-0.png \' alt="138517-61-0" height="250" width="250">',
                    ],
                    [
                        -8.188734,
                        4.2375903,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2635339-89-6.png \' alt="2635339-89-6" height="250" width="250">',
                    ],
                    [
                        -3.3718033,
                        3.0843863,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/169689-05-8.png \' alt="169689-05-8" height="250" width="250">',
                    ],
                    [
                        5.2948885,
                        -4.469247,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1454257-32-9.png \' alt="1454257-32-9" height="250" width="250">',
                    ],
                    [
                        -11.897148,
                        2.9622254,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/136705-64-1.png \' alt="136705-64-1" height="250" width="250">',
                    ],
                    [
                        1.3566512,
                        -4.5051785,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1362386-02-4.png \' alt="1362386-02-4" height="250" width="250">',
                    ],
                    [
                        -8.383303,
                        10.865402,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1224727-08-5.png \' alt="1224727-08-5" height="250" width="250">',
                    ],
                    [
                        -11.004744,
                        1.1098785,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1710765-27-7.png \' alt="1710765-27-7" height="250" width="250">',
                    ],
                    [
                        -17.930758,
                        4.910777,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2374958-85-5.png \' alt="2374958-85-5" height="250" width="250">',
                    ],
                    [
                        -6.8408904,
                        9.207797,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/582298-51-9.png \' alt="582298-51-9" height="250" width="250">',
                    ],
                    [
                        0.016140994,
                        11.455762,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1235437-44-1.png \' alt="1235437-44-1" height="250" width="250">',
                    ],
                    [
                        2.0404627,
                        5.677371,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/135616-40-9.png \' alt="135616-40-9" height="250" width="250">',
                    ],
                    [
                        2.4720354,
                        6.980715,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/297752-25-1.png \' alt="297752-25-1" height="250" width="250">',
                    ],
                    [
                        -13.752002,
                        0.83590984,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1011465-24-9.png \' alt="1011465-24-9" height="250" width="250">',
                    ],
                    [
                        -5.5808554,
                        -2.337317,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-63-9.png \' alt="2634687-63-9" height="250" width="250">',
                    ],
                    [
                        0.72831416,
                        -2.2685044,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/181139-49-1.png \' alt="181139-49-1" height="250" width="250">',
                    ],
                    [
                        -2.0465815,
                        8.900839,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1314743-49-1.png \' alt="1314743-49-1" height="250" width="250">',
                    ],
                    [
                        -8.15601,
                        -0.6101452,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/924294-55-3.png \' alt="924294-55-3" height="250" width="250">',
                    ],
                    [
                        -1.4738605,
                        7.669747,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/492-08-0.png \' alt="492-08-0" height="250" width="250">',
                    ],
                    [
                        2.2383907,
                        9.536148,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/43077-29-8.png \' alt="43077-29-8" height="250" width="250">',
                    ],
                    [
                        -9.300423,
                        -8.601312,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/183072-30-2.png \' alt="183072-30-2" height="250" width="250">',
                    ],
                    [
                        -9.215907,
                        -9.426747,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2361262-51-1.png \' alt="2361262-51-1" height="250" width="250">',
                    ],
                    [
                        4.017307,
                        9.111308,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/500862-14-6.png \' alt="500862-14-6" height="250" width="250">',
                    ],
                    [
                        -16.574558,
                        1.5426135,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2829289-12-3.png \' alt="2829289-12-3" height="250" width="250">',
                    ],
                    [
                        0.18305542,
                        -10.912304,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1262129-47-4.png \' alt="1262129-47-4" height="250" width="250">',
                    ],
                    [
                        4.1382775,
                        2.2844026,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/871828-95-4.png \' alt="871828-95-4" height="250" width="250">',
                    ],
                    [
                        -4.2829237,
                        6.860219,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/99135-95-2.png \' alt="99135-95-2" height="250" width="250">',
                    ],
                    [
                        6.841682,
                        -2.2411113,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/582300-09-2.png \' alt="582300-09-2" height="250" width="250">',
                    ],
                    [
                        -6.2641397,
                        3.8944178,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/136705-65-2.png \' alt="136705-65-2" height="250" width="250">',
                    ],
                    [
                        9.271307,
                        -6.673375,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/175411-93-5.png \' alt="175411-93-5" height="250" width="250">',
                    ],
                    [
                        0.4360333,
                        6.349885,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/59260-76-3.png \' alt="59260-76-3" height="250" width="250">',
                    ],
                    [
                        1.1545314,
                        10.6276455,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-76-7.png \' alt="2565792-76-7" height="250" width="250">',
                    ],
                    [
                        -2.7062998,
                        7.5819454,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/90-39-1.png \' alt="90-39-1" height="250" width="250">',
                    ],
                    [
                        -15.859297,
                        -3.8275003,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2214207-73-3.png \' alt="2214207-73-3" height="250" width="250">',
                    ],
                    [
                        -0.030543933,
                        -1.3550658,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1918125-85-5.png \' alt="1918125-85-5" height="250" width="250">',
                    ],
                    [
                        8.738439,
                        -7.034297,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1808221-00-2.png \' alt="1808221-00-2" height="250" width="250">',
                    ],
                    [
                        2.8453875,
                        8.362942,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/190003-81-7.png \' alt="190003-81-7" height="250" width="250">',
                    ],
                    [
                        -8.775333,
                        9.233985,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/174677-83-9.png \' alt="174677-83-9" height="250" width="250">',
                    ],
                    [
                        -10.961691,
                        -1.9521731,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2416226-97-4.png \' alt="2416226-97-4" height="250" width="250">',
                    ],
                    [
                        -7.4401107,
                        2.521109,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/638132-66-8.png \' alt="638132-66-8" height="250" width="250">',
                    ],
                    [
                        -9.972925,
                        3.9644744,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/136779-28-7.png \' alt="136779-28-7" height="250" width="250">',
                    ],
                    [
                        -1.04424,
                        5.9637585,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/20439-47-8.png \' alt="20439-47-8" height="250" width="250">',
                    ],
                    [
                        -1.2707053,
                        10.855276,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/320778-92-5.png \' alt="320778-92-5" height="250" width="250">',
                    ],
                    [
                        0.6672189,
                        -8.260823,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/165125-95-1.png \' alt="165125-95-1" height="250" width="250">',
                    ],
                    [
                        3.4371595,
                        -4.8107142,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1904575-43-4.png \' alt="1904575-43-4" height="250" width="250">',
                    ],
                    [
                        6.3188353,
                        5.8746758,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2249931-95-9.png \' alt="2249931-95-9" height="250" width="250">',
                    ],
                    [
                        -0.7360863,
                        0.3547788,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/528814-26-8.png \' alt="528814-26-8" height="250" width="250">',
                    ],
                    [
                        12.518437,
                        1.9448481,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/223259-63-0.png \' alt="223259-63-0" height="250" width="250">',
                    ],
                    [
                        -11.005819,
                        -8.306402,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/875640-20-3.png \' alt="875640-20-3" height="250" width="250">',
                    ],
                    [
                        0.4450417,
                        -5.988451,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-81-6.png \' alt="2757082-81-6" height="250" width="250">',
                    ],
                ],
                label: {
                    show: false,
                    margin: 8,
                },
            },
            {
                type: "scatter",
                name: "class-1",
                symbolSize: 10,
                data: [
                    [
                        -25.581678,
                        -45.60651,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2058236-53-4.png \' alt="2058236-53-4" height="250" width="250">',
                    ],
                    [
                        -40.73085,
                        -26.083273,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/292625-77-5.png \' alt="292625-77-5" height="250" width="250">',
                    ],
                    [
                        -28.918514,
                        -37.541317,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-97-7.png \' alt="2757083-97-7" height="250" width="250">',
                    ],
                    [
                        -15.498636,
                        -33.6441,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2126892-51-9.png \' alt="2126892-51-9" height="250" width="250">',
                    ],
                    [
                        -26.112022,
                        -47.171417,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1701405-00-6.png \' alt="1701405-00-6" height="250" width="250">',
                    ],
                    [
                        -17.806816,
                        -25.759872,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757085-45-1.png \' alt="2757085-45-1" height="250" width="250">',
                    ],
                    [
                        -25.352907,
                        -31.968508,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/148461-15-8.png \' alt="148461-15-8" height="250" width="250">',
                    ],
                    [
                        -40.959743,
                        -25.959614,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2417321-41-4.png \' alt="2417321-41-4" height="250" width="250">',
                    ],
                    [
                        -19.76566,
                        -37.165596,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/220628-97-7.png \' alt="220628-97-7" height="250" width="250">',
                    ],
                    [
                        -25.353968,
                        -31.960455,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/167171-03-1.png \' alt="167171-03-1" height="250" width="250">',
                    ],
                    [
                        -32.345634,
                        -27.042908,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-54-3.png \' alt="2757082-54-3" height="250" width="250">',
                    ],
                    [
                        -27.756937,
                        -37.343483,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2170033-85-7.png \' alt="2170033-85-7" height="250" width="250">',
                    ],
                    [
                        -34.238255,
                        -25.88821,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-65-9.png \' alt="2757083-65-9" height="250" width="250">',
                    ],
                    [
                        -34.183968,
                        -28.801418,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/497172-36-8.png \' alt="497172-36-8" height="250" width="250">',
                    ],
                    [
                        -31.512875,
                        -36.316963,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828438-83-9.png \' alt="2828438-83-9" height="250" width="250">',
                    ],
                    [
                        -27.779703,
                        -38.70419,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/541549-96-6.png \' alt="541549-96-6" height="250" width="250">',
                    ],
                    [
                        -18.963713,
                        -23.71199,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1246401-50-2.png \' alt="1246401-50-2" height="250" width="250">',
                    ],
                    [
                        -21.080553,
                        -31.693596,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1361563-40-7.png \' alt="1361563-40-7" height="250" width="250">',
                    ],
                    [
                        -17.03553,
                        -33.609936,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2067322-25-0.png \' alt="2067322-25-0" height="250" width="250">',
                    ],
                    [
                        -31.956692,
                        -19.911205,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2172908-07-3.png \' alt="2172908-07-3" height="250" width="250">',
                    ],
                    [
                        -34.674053,
                        -25.511576,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2635322-22-2.png \' alt="2635322-22-2" height="250" width="250">',
                    ],
                    [
                        -19.432686,
                        -20.727911,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-66-2.png \' alt="2634687-66-2" height="250" width="250">',
                    ],
                    [
                        -18.098248,
                        -28.969563,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/404844-76-4.png \' alt="404844-76-4" height="250" width="250">',
                    ],
                    [
                        -27.8979,
                        -38.79305,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757084-01-6.png \' alt="2757084-01-6" height="250" width="250">',
                    ],
                    [
                        -28.975716,
                        -38.64594,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757084-00-5.png \' alt="2757084-00-5" height="250" width="250">',
                    ],
                    [
                        -33.91697,
                        -26.279352,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-58-0.png \' alt="2757083-58-0" height="250" width="250">',
                    ],
                    [
                        -18.908339,
                        -39.062107,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/220628-99-9.png \' alt="220628-99-9" height="250" width="250">',
                    ],
                    [
                        -22.152538,
                        -27.634687,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/913829-88-6.png \' alt="913829-88-6" height="250" width="250">',
                    ],
                    [
                        -37.147663,
                        -31.134954,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/410092-98-7.png \' alt="410092-98-7" height="250" width="250">',
                    ],
                    [
                        -41.648895,
                        -31.428535,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-68-9.png \' alt="2757082-68-9" height="250" width="250">',
                    ],
                    [
                        -18.724016,
                        -37.8639,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/233256-45-6.png \' alt="233256-45-6" height="250" width="250">',
                    ],
                    [
                        -22.417692,
                        -27.730114,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/913829-90-0.png \' alt="913829-90-0" height="250" width="250">',
                    ],
                    [
                        -19.430962,
                        -20.749401,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-31-6.png \' alt="2757082-31-6" height="250" width="250">',
                    ],
                    [
                        -15.345417,
                        -35.674465,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/163165-92-2.png \' alt="163165-92-2" height="250" width="250">',
                    ],
                    [
                        -24.357313,
                        -23.881628,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1373357-05-1.png \' alt="1373357-05-1" height="250" width="250">',
                    ],
                    [
                        -40.59974,
                        -27.242538,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1509929-23-0.png \' alt="1509929-23-0" height="250" width="250">',
                    ],
                    [
                        -20.587505,
                        -39.669888,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/220628-98-8.png \' alt="220628-98-8" height="250" width="250">',
                    ],
                    [
                        -24.682188,
                        -45.182354,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-35-3.png \' alt="2757083-35-3" height="250" width="250">',
                    ],
                    [
                        -37.26786,
                        -31.304775,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-64-5.png \' alt="2757082-64-5" height="250" width="250">',
                    ],
                    [
                        -17.405651,
                        -30.04551,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/404844-73-1.png \' alt="404844-73-1" height="250" width="250">',
                    ],
                    [
                        -17.37426,
                        -30.082062,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/217653-18-4.png \' alt="217653-18-4" height="250" width="250">',
                    ],
                    [
                        -36.801662,
                        -30.571068,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-57-6.png \' alt="2757082-57-6" height="250" width="250">',
                    ],
                    [
                        -36.320576,
                        -24.284449,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-86-1.png \' alt="2757082-86-1" height="250" width="250">',
                    ],
                    [
                        -25.965086,
                        -46.9818,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/280755-83-1.png \' alt="280755-83-1" height="250" width="250">',
                    ],
                    [
                        -16.078964,
                        -36.901577,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/135948-05-9.png \' alt="135948-05-9" height="250" width="250">',
                    ],
                    [
                        -37.59581,
                        -24.83747,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1997306-76-9.png \' alt="1997306-76-9" height="250" width="250">',
                    ],
                    [
                        -20.157066,
                        -40.059097,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/220629-00-5.png \' alt="220629-00-5" height="250" width="250">',
                    ],
                    [
                        -31.634161,
                        -25.079428,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1222193-12-5.png \' alt="1222193-12-5" height="250" width="250">',
                    ],
                    [
                        -24.357313,
                        -23.881628,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2283330-44-7.png \' alt="2283330-44-7" height="250" width="250">',
                    ],
                    [
                        -16.078358,
                        -36.901707,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/150699-08-4.png \' alt="150699-08-4" height="250" width="250">',
                    ],
                    [
                        -39.632965,
                        -25.365944,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2411385-99-2.png \' alt="2411385-99-2" height="250" width="250">',
                    ],
                    [
                        -35.16978,
                        -28.170074,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2417321-37-8.png \' alt="2417321-37-8" height="250" width="250">',
                    ],
                    [
                        -27.81724,
                        -37.30686,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757084-02-7.png \' alt="2757084-02-7" height="250" width="250">',
                    ],
                    [
                        -31.877941,
                        -19.91361,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2058236-55-6.png \' alt="2058236-55-6" height="250" width="250">',
                    ],
                    [
                        -24.639908,
                        -45.132744,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2058236-52-3.png \' alt="2058236-52-3" height="250" width="250">',
                    ],
                    [
                        -40.74184,
                        -28.411388,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-61-2.png \' alt="2757082-61-2" height="250" width="250">',
                    ],
                    [
                        -31.519506,
                        -36.320225,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828438-82-8.png \' alt="2828438-82-8" height="250" width="250">',
                    ],
                    [
                        -35.73568,
                        -24.592424,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1997306-77-0.png \' alt="1997306-77-0" height="250" width="250">',
                    ],
                    [
                        -34.25116,
                        -19.49501,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-62-3.png \' alt="2757082-62-3" height="250" width="250">',
                    ],
                    [
                        -21.10114,
                        -32.098003,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828432-08-0.png \' alt="2828432-08-0" height="250" width="250">',
                    ],
                    [
                        -19.534517,
                        -37.202,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/259105-55-0.png \' alt="259105-55-0" height="250" width="250">',
                    ],
                    [
                        -35.46997,
                        -27.908777,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2417528-09-5.png \' alt="2417528-09-5" height="250" width="250">',
                    ],
                    [
                        -33.47817,
                        -19.655615,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2417321-38-9.png \' alt="2417321-38-9" height="250" width="250">',
                    ],
                    [
                        -40.509422,
                        -24.546228,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2645354-83-0.png \' alt="2645354-83-0" height="250" width="250">',
                    ],
                    [
                        -26.078981,
                        -46.02652,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-34-2.png \' alt="2757083-34-2" height="250" width="250">',
                    ],
                    [
                        -41.653152,
                        -31.41958,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/372200-56-1.png \' alt="372200-56-1" height="250" width="250">',
                    ],
                    [
                        -19.361944,
                        -39.931087,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/259105-53-8.png \' alt="259105-53-8" height="250" width="250">',
                    ],
                    [
                        -25.415438,
                        -47.089462,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1402851-53-9.png \' alt="1402851-53-9" height="250" width="250">',
                    ],
                    [
                        -17.930576,
                        -29.24166,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/233256-44-5.png \' alt="233256-44-5" height="250" width="250">',
                    ],
                    [
                        -38.985943,
                        -25.268726,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/238759-98-3.png \' alt="238759-98-3" height="250" width="250">',
                    ],
                    [
                        -40.167763,
                        -26.195812,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2411386-00-8.png \' alt="2411386-00-8" height="250" width="250">',
                    ],
                    [
                        -28.65369,
                        -37.385628,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/541549-95-5.png \' alt="541549-95-5" height="250" width="250">',
                    ],
                    [
                        -28.966766,
                        -38.589485,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/541549-94-4.png \' alt="541549-94-4" height="250" width="250">',
                    ],
                    [
                        -24.85918,
                        -46.65799,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1402851-52-8.png \' alt="1402851-52-8" height="250" width="250">',
                    ],
                    [
                        -35.855545,
                        -29.190195,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-59-8.png \' alt="2757082-59-8" height="250" width="250">',
                    ],
                    [
                        -24.33731,
                        -19.69293,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1003886-09-6.png \' alt="1003886-09-6" height="250" width="250">',
                    ],
                    [
                        -17.184254,
                        -33.613438,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-90-7.png \' alt="2757082-90-7" height="250" width="250">',
                    ],
                    [
                        -33.83211,
                        -26.453253,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1108603-34-4.png \' alt="1108603-34-4" height="250" width="250">',
                    ],
                    [
                        -24.33731,
                        -19.69293,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-00-9.png \' alt="2757082-00-9" height="250" width="250">',
                    ],
                    [
                        -20.817987,
                        -39.188374,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/259105-54-9.png \' alt="259105-54-9" height="250" width="250">',
                    ],
                ],
                label: {
                    show: false,
                    margin: 8,
                },
            },
            {
                type: "scatter",
                name: "class-2",
                symbolSize: 10,
                data: [
                    [
                        27.204302,
                        17.728413,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2315262-68-9.png \' alt="2315262-68-9" height="250" width="250">',
                    ],
                    [
                        25.377058,
                        7.105826,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/35294-28-1.png \' alt="35294-28-1" height="250" width="250">',
                    ],
                    [
                        48.02618,
                        25.493093,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/878111-16-1.png \' alt="878111-16-1" height="250" width="250">',
                    ],
                    [
                        36.952682,
                        13.9624815,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/871130-15-3.png \' alt="871130-15-3" height="250" width="250">',
                    ],
                    [
                        43.59821,
                        1.9137737,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/618854-91-4.png \' alt="618854-91-4" height="250" width="250">',
                    ],
                    [
                        27.592382,
                        5.961768,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/142128-92-5.png \' alt="142128-92-5" height="250" width="250">',
                    ],
                    [
                        25.422663,
                        23.751259,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1011465-21-6.png \' alt="1011465-21-6" height="250" width="250">',
                    ],
                    [
                        35.700424,
                        11.372656,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/699006-55-8.png \' alt="699006-55-8" height="250" width="250">',
                    ],
                    [
                        29.462662,
                        12.17808,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/947337-17-9.png \' alt="947337-17-9" height="250" width="250">',
                    ],
                    [
                        24.74095,
                        11.453775,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/76189-55-4.png \' alt="76189-55-4" height="250" width="250">',
                    ],
                    [
                        24.432245,
                        29.354923,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1365531-75-4.png \' alt="1365531-75-4" height="250" width="250">',
                    ],
                    [
                        45.320377,
                        12.486204,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2829281-60-7.png \' alt="2829281-60-7" height="250" width="250">',
                    ],
                    [
                        24.443752,
                        14.104982,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/93713-30-5.png \' alt="93713-30-5" height="250" width="250">',
                    ],
                    [
                        39.027607,
                        24.3856,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2247513-10-4.png \' alt="2247513-10-4" height="250" width="250">',
                    ],
                    [
                        25.748417,
                        10.2395525,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/189274-36-0.png \' alt="189274-36-0" height="250" width="250">',
                    ],
                    [
                        31.211363,
                        23.695559,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/121314-69-0.png \' alt="121314-69-0" height="250" width="250">',
                    ],
                    [
                        34.14328,
                        12.639662,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/871130-16-4.png \' alt="871130-16-4" height="250" width="250">',
                    ],
                    [
                        49.628628,
                        17.272964,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/922711-77-1.png \' alt="922711-77-1" height="250" width="250">',
                    ],
                    [
                        39.97826,
                        20.217678,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1284293-45-3.png \' alt="1284293-45-3" height="250" width="250">',
                    ],
                    [
                        53.898422,
                        5.2576666,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757287-31-1.png \' alt="2757287-31-1" height="250" width="250">',
                    ],
                    [
                        21.977774,
                        26.054495,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/133545-16-1.png \' alt="133545-16-1" height="250" width="250">',
                    ],
                    [
                        27.757738,
                        31.712807,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/908338-44-3.png \' alt="908338-44-3" height="250" width="250">',
                    ],
                    [
                        35.60347,
                        6.9701633,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1170736-59-0.png \' alt="1170736-59-0" height="250" width="250">',
                    ],
                    [
                        39.141125,
                        3.659517,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/329735-68-4.png \' alt="329735-68-4" height="250" width="250">',
                    ],
                    [
                        29.53648,
                        16.475872,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/18531-94-7.png \' alt="18531-94-7" height="250" width="250">',
                    ],
                    [
                        21.977774,
                        26.054495,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/133545-17-2.png \' alt="133545-17-2" height="250" width="250">',
                    ],
                    [
                        29.919048,
                        5.2210684,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/260442-17-9.png \' alt="260442-17-9" height="250" width="250">',
                    ],
                    [
                        34.225334,
                        10.451166,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1445903-27-4.png \' alt="1445903-27-4" height="250" width="250">',
                    ],
                    [
                        30.129065,
                        14.835209,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/929097-93-8.png \' alt="929097-93-8" height="250" width="250">',
                    ],
                    [
                        22.221558,
                        16.444952,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1092064-02-2.png \' alt="1092064-02-2" height="250" width="250">',
                    ],
                    [
                        41.93606,
                        33.417274,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/18531-96-9.png \' alt="18531-96-9" height="250" width="250">',
                    ],
                    [
                        29.537554,
                        16.476028,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/18531-99-2.png \' alt="18531-99-2" height="250" width="250">',
                    ],
                    [
                        28.482533,
                        26.950893,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/863659-88-5.png \' alt="863659-88-5" height="250" width="250">',
                    ],
                    [
                        24.444307,
                        14.1053915,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/666175-40-2.png \' alt="666175-40-2" height="250" width="250">',
                    ],
                    [
                        28.889137,
                        15.743016,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/137848-29-4.png \' alt="137848-29-4" height="250" width="250">',
                    ],
                    [
                        49.556156,
                        9.975438,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/255882-16-7.png \' alt="255882-16-7" height="250" width="250">',
                    ],
                    [
                        27.857086,
                        35.931778,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/756491-51-7.png \' alt="756491-51-7" height="250" width="250">',
                    ],
                    [
                        42.387333,
                        16.010733,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/791616-62-1.png \' alt="791616-62-1" height="250" width="250">',
                    ],
                    [
                        24.880627,
                        4.622085,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/117745-41-2.png \' alt="117745-41-2" height="250" width="250">',
                    ],
                    [
                        25.796116,
                        12.529068,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/99646-28-3.png \' alt="99646-28-3" height="250" width="250">',
                    ],
                    [
                        32.827454,
                        26.793716,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/147702-13-4.png \' alt="147702-13-4" height="250" width="250">',
                    ],
                    [
                        41.02558,
                        8.878597,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/695162-87-9.png \' alt="695162-87-9" height="250" width="250">',
                    ],
                    [
                        34.02,
                        33.484547,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/147702-15-6.png \' alt="147702-15-6" height="250" width="250">',
                    ],
                    [
                        30.913164,
                        8.251814,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2270966-57-7.png \' alt="2270966-57-7" height="250" width="250">',
                    ],
                    [
                        22.160154,
                        21.741474,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/219583-87-6.png \' alt="219583-87-6" height="250" width="250">',
                    ],
                    [
                        41.93594,
                        33.41725,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/80703-23-7.png \' alt="80703-23-7" height="250" width="250">',
                    ],
                    [
                        44.333473,
                        5.377451,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/618854-90-3.png \' alt="618854-90-3" height="250" width="250">',
                    ],
                    [
                        44.03529,
                        27.554653,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/922711-71-5.png \' alt="922711-71-5" height="250" width="250">',
                    ],
                    [
                        35.969036,
                        24.34174,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1028416-48-9.png \' alt="1028416-48-9" height="250" width="250">',
                    ],
                    [
                        27.857086,
                        35.931778,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1199631-29-2.png \' alt="1199631-29-2" height="250" width="250">',
                    ],
                    [
                        30.979956,
                        29.803984,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/361342-49-6.png \' alt="361342-49-6" height="250" width="250">',
                    ],
                    [
                        27.011995,
                        12.225222,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/852127-05-0.png \' alt="852127-05-0" height="250" width="250">',
                    ],
                    [
                        34.697197,
                        10.645594,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/35193-64-7.png \' alt="35193-64-7" height="250" width="250">',
                    ],
                    [
                        28.643576,
                        20.739706,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/287111-93-7.png \' alt="287111-93-7" height="250" width="250">',
                    ],
                    [
                        22.163591,
                        21.744812,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/189518-78-3.png \' alt="189518-78-3" height="250" width="250">',
                    ],
                    [
                        39.97826,
                        20.217678,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1882075-20-8.png \' alt="1882075-20-8" height="250" width="250">',
                    ],
                    [
                        32.18832,
                        11.010841,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1496637-05-8.png \' alt="1496637-05-8" height="250" width="250">',
                    ],
                    [
                        31.21198,
                        23.697544,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/141779-46-6.png \' alt="141779-46-6" height="250" width="250">',
                    ],
                    [
                        25.487135,
                        17.449991,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/361342-52-1.png \' alt="361342-52-1" height="250" width="250">',
                    ],
                    [
                        27.05579,
                        6.3715105,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/173831-50-0.png \' alt="173831-50-0" height="250" width="250">',
                    ],
                    [
                        39.027645,
                        24.385647,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1205537-79-6.png \' alt="1205537-79-6" height="250" width="250">',
                    ],
                    [
                        24.36803,
                        15.310773,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/298695-62-2.png \' alt="298695-62-2" height="250" width="250">',
                    ],
                    [
                        29.337742,
                        22.059504,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/877304-22-8.png \' alt="877304-22-8" height="250" width="250">',
                    ],
                    [
                        48.02618,
                        25.493093,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/695162-89-1.png \' alt="695162-89-1" height="250" width="250">',
                    ],
                    [
                        38.191372,
                        12.669924,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/874948-60-4.png \' alt="874948-60-4" height="250" width="250">',
                    ],
                    [
                        34.69037,
                        20.552534,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/55515-99-6.png \' alt="55515-99-6" height="250" width="250">',
                    ],
                    [
                        38.66822,
                        39.131367,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1374030-19-9.png \' alt="1374030-19-9" height="250" width="250">',
                    ],
                    [
                        37.86437,
                        29.552841,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1011465-19-2.png \' alt="1011465-19-2" height="250" width="250">',
                    ],
                    [
                        34.601913,
                        10.599659,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/39648-67-4.png \' alt="39648-67-4" height="250" width="250">',
                    ],
                    [
                        37.502483,
                        17.059824,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1644121-35-6.png \' alt="1644121-35-6" height="250" width="250">',
                    ],
                    [
                        31.76874,
                        18.038107,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/861909-39-9.png \' alt="861909-39-9" height="250" width="250">',
                    ],
                    [
                        25.378475,
                        7.105814,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/75640-87-8.png \' alt="75640-87-8" height="250" width="250">',
                    ],
                    [
                        25.013885,
                        20.05377,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/874948-61-5.png \' alt="874948-61-5" height="250" width="250">',
                    ],
                    [
                        25.202793,
                        24.204357,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757287-35-5.png \' alt="2757287-35-5" height="250" width="250">',
                    ],
                    [
                        28.974035,
                        17.63299,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/265116-85-6.png \' alt="265116-85-6" height="250" width="250">',
                    ],
                    [
                        23.57065,
                        6.040261,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/150971-37-2.png \' alt="150971-37-2" height="250" width="250">',
                    ],
                    [
                        44.975933,
                        20.655735,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/135139-00-3.png \' alt="135139-00-3" height="250" width="250">',
                    ],
                    [
                        27.643892,
                        20.830938,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/119707-74-3.png \' alt="119707-74-3" height="250" width="250">',
                    ],
                    [
                        27.385582,
                        15.785138,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/352310-87-3.png \' alt="352310-87-3" height="250" width="250">',
                    ],
                    [
                        44.975933,
                        20.655735,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/137219-86-4.png \' alt="137219-86-4" height="250" width="250">',
                    ],
                    [
                        30.38165,
                        17.642225,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/861909-34-4.png \' alt="861909-34-4" height="250" width="250">',
                    ],
                    [
                        27.757738,
                        31.712807,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/247123-09-7.png \' alt="247123-09-7" height="250" width="250">',
                    ],
                    [
                        44.03529,
                        27.554653,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1945966-28-8.png \' alt="1945966-28-8" height="250" width="250">',
                    ],
                    [
                        34.21392,
                        16.1085,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/80655-81-8.png \' alt="80655-81-8" height="250" width="250">',
                    ],
                    [
                        27.313751,
                        22.18381,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1309446-14-7.png \' alt="1309446-14-7" height="250" width="250">',
                    ],
                    [
                        23.092438,
                        10.883543,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/828927-94-2.png \' alt="828927-94-2" height="250" width="250">',
                    ],
                    [
                        24.170172,
                        7.5770664,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2417456-74-5.png \' alt="2417456-74-5" height="250" width="250">',
                    ],
                    [
                        33.209812,
                        4.235752,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/679787-77-0.png \' alt="679787-77-0" height="250" width="250">',
                    ],
                    [
                        30.034296,
                        19.929678,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/957111-25-0.png \' alt="957111-25-0" height="250" width="250">',
                    ],
                    [
                        26.608892,
                        11.495705,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/150024-49-0.png \' alt="150024-49-0" height="250" width="250">',
                    ],
                    [
                        39.141064,
                        3.659082,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/205927-03-3.png \' alt="205927-03-3" height="250" width="250">',
                    ],
                    [
                        45.321175,
                        12.485802,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2829281-61-8.png \' alt="2829281-61-8" height="250" width="250">',
                    ],
                    [
                        31.117496,
                        16.19329,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/864943-22-6.png \' alt="864943-22-6" height="250" width="250">',
                    ],
                    [
                        28.078632,
                        13.80932,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1226907-33-0.png \' alt="1226907-33-0" height="250" width="250">',
                    ],
                    [
                        38.66822,
                        39.131367,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/695162-88-0.png \' alt="695162-88-0" height="250" width="250">',
                    ],
                    [
                        28.807373,
                        13.173197,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/18741-85-0.png \' alt="18741-85-0" height="250" width="250">',
                    ],
                    [
                        49.556564,
                        9.975142,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/255882-15-6.png \' alt="255882-15-6" height="250" width="250">',
                    ],
                    [
                        25.36743,
                        6.1537986,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/134484-36-9.png \' alt="134484-36-9" height="250" width="250">',
                    ],
                    [
                        26.027039,
                        7.743352,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/145964-33-6.png \' alt="145964-33-6" height="250" width="250">',
                    ],
                    [
                        30.89378,
                        13.024919,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/864943-23-7.png \' alt="864943-23-7" height="250" width="250">',
                    ],
                    [
                        43.59821,
                        1.9137737,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1228600-99-4.png \' alt="1228600-99-4" height="250" width="250">',
                    ],
                    [
                        23.442148,
                        18.210512,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/929097-92-7.png \' alt="929097-92-7" height="250" width="250">',
                    ],
                    [
                        31.571793,
                        39.135334,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/791616-63-2.png \' alt="791616-63-2" height="250" width="250">',
                    ],
                    [
                        28.274555,
                        23.732096,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1058734-56-7.png \' alt="1058734-56-7" height="250" width="250">',
                    ],
                    [
                        37.502934,
                        17.05979,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/861909-33-3.png \' alt="861909-33-3" height="250" width="250">',
                    ],
                    [
                        35.046516,
                        9.283948,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1450925-06-0.png \' alt="1450925-06-0" height="250" width="250">',
                    ],
                    [
                        48.107727,
                        3.3713996,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/791616-69-8.png \' alt="791616-69-8" height="250" width="250">',
                    ],
                    [
                        34.02,
                        33.484547,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/147702-16-7.png \' alt="147702-16-7" height="250" width="250">',
                    ],
                    [
                        37.918926,
                        28.5559,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/575451-08-0.png \' alt="575451-08-0" height="250" width="250">',
                    ],
                    [
                        28.641113,
                        9.683498,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1069114-12-0.png \' alt="1069114-12-0" height="250" width="250">',
                    ],
                    [
                        44.333473,
                        5.377451,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1402852-05-4.png \' alt="1402852-05-4" height="250" width="250">',
                    ],
                    [
                        24.364216,
                        9.152954,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/137769-30-3.png \' alt="137769-30-3" height="250" width="250">',
                    ],
                    [
                        32.827812,
                        26.792915,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/147702-14-5.png \' alt="147702-14-5" height="250" width="250">',
                    ],
                    [
                        49.628628,
                        17.272964,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1121764-48-4.png \' alt="1121764-48-4" height="250" width="250">',
                    ],
                    [
                        48.107727,
                        3.3713996,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1228600-98-3.png \' alt="1228600-98-3" height="250" width="250">',
                    ],
                    [
                        23.132704,
                        13.790508,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/879505-38-1.png \' alt="879505-38-1" height="250" width="250">',
                    ],
                    [
                        27.388731,
                        11.073197,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1187629-43-1.png \' alt="1187629-43-1" height="250" width="250">',
                    ],
                    [
                        37.006283,
                        9.762144,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1191451-24-7.png \' alt="1191451-24-7" height="250" width="250">',
                    ],
                    [
                        27.209402,
                        19.531986,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/435327-17-6.png \' alt="435327-17-6" height="250" width="250">',
                    ],
                    [
                        41.0253,
                        8.878705,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/878111-18-3.png \' alt="878111-18-3" height="250" width="250">',
                    ],
                    [
                        42.38681,
                        16.011644,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/878111-17-2.png \' alt="878111-17-2" height="250" width="250">',
                    ],
                    [
                        26.948042,
                        9.161521,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/100165-88-6.png \' alt="100165-88-6" height="250" width="250">',
                    ],
                    [
                        34.720753,
                        20.62328,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/615247-86-4.png \' alt="615247-86-4" height="250" width="250">',
                    ],
                    [
                        32.076836,
                        14.361984,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/361342-51-0.png \' alt="361342-51-0" height="250" width="250">',
                    ],
                    [
                        32.19156,
                        22.652357,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2280936-20-9.png \' alt="2280936-20-9" height="250" width="250">',
                    ],
                    [
                        34.21475,
                        16.109678,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/65283-60-5.png \' alt="65283-60-5" height="250" width="250">',
                    ],
                    [
                        33.306328,
                        9.153596,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/361342-55-4.png \' alt="361342-55-4" height="250" width="250">',
                    ],
                    [
                        28.482533,
                        26.950893,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/851615-07-1.png \' alt="851615-07-1" height="250" width="250">',
                    ],
                    [
                        27.64433,
                        20.831367,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/111795-43-8.png \' alt="111795-43-8" height="250" width="250">',
                    ],
                    [
                        53.898422,
                        5.2576666,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2635339-79-4.png \' alt="2635339-79-4" height="250" width="250">',
                    ],
                    [
                        26.468824,
                        21.039625,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/911383-51-2.png \' alt="911383-51-2" height="250" width="250">',
                    ],
                    [
                        35.969036,
                        24.34174,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1011465-22-7.png \' alt="1011465-22-7" height="250" width="250">',
                    ],
                    [
                        33.210438,
                        4.23623,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/405877-65-8.png \' alt="405877-65-8" height="250" width="250">',
                    ],
                    [
                        33.917458,
                        18.742952,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/874948-59-1.png \' alt="874948-59-1" height="250" width="250">',
                    ],
                    [
                        37.918926,
                        28.5559,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/396134-73-9.png \' alt="396134-73-9" height="250" width="250">',
                    ],
                    [
                        30.979944,
                        29.803907,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/361342-50-9.png \' alt="361342-50-9" height="250" width="250">',
                    ],
                    [
                        28.808336,
                        13.174475,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/18531-95-8.png \' alt="18531-95-8" height="250" width="250">',
                    ],
                    [
                        24.431969,
                        29.354927,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1365531-76-5.png \' alt="1365531-76-5" height="250" width="250">',
                    ],
                    [
                        31.174,
                        20.69277,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1043567-32-3.png \' alt="1043567-32-3" height="250" width="250">',
                    ],
                    [
                        31.570824,
                        39.136673,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/874948-63-7.png \' alt="874948-63-7" height="250" width="250">',
                    ],
                    [
                        28.361,
                        20.259237,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/55515-98-5.png \' alt="55515-98-5" height="250" width="250">',
                    ],
                ],
                label: {
                    show: false,
                    margin: 8,
                },
            },
            {
                type: "scatter",
                name: "class-3",
                symbolSize: 10,
                data: [
                    [
                        -38.7397,
                        12.985595,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/566940-03-2.png \' alt="566940-03-2" height="250" width="250">',
                    ],
                    [
                        -43.25239,
                        7.1205873,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2491653-62-2.png \' alt="2491653-62-2" height="250" width="250">',
                    ],
                    [
                        -38.739414,
                        12.986673,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/210169-40-7.png \' alt="210169-40-7" height="250" width="250">',
                    ],
                    [
                        -38.03026,
                        -9.12195,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/330443-74-8.png \' alt="330443-74-8" height="250" width="250">',
                    ],
                    [
                        -41.546997,
                        -14.115745,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2222863-66-1.png \' alt="2222863-66-1" height="250" width="250">',
                    ],
                    [
                        -27.760029,
                        -6.0771503,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1092582-89-2.png \' alt="1092582-89-2" height="250" width="250">',
                    ],
                    [
                        -41.90634,
                        -9.937011,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-52-4.png \' alt="2757083-52-4" height="250" width="250">',
                    ],
                    [
                        -40.716568,
                        -6.4699335,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-79-7.png \' alt="2634687-79-7" height="250" width="250">',
                    ],
                    [
                        -28.120623,
                        -8.893346,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/875640-21-4.png \' alt="875640-21-4" height="250" width="250">',
                    ],
                    [
                        -32.183937,
                        -0.6604672,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/229184-98-9.png \' alt="229184-98-9" height="250" width="250">',
                    ],
                    [
                        -27.797558,
                        -2.2366457,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-16-7.png \' alt="2757082-16-7" height="250" width="250">',
                    ],
                    [
                        -29.875387,
                        -3.3668518,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2097145-89-4.png \' alt="2097145-89-4" height="250" width="250">',
                    ],
                    [
                        -38.50189,
                        -10.40911,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-62-6.png \' alt="2757083-62-6" height="250" width="250">',
                    ],
                    [
                        -31.028866,
                        6.630843,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2351219-89-9.png \' alt="2351219-89-9" height="250" width="250">',
                    ],
                    [
                        -19.52794,
                        -12.086223,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-19-0.png \' alt="2757082-19-0" height="250" width="250">',
                    ],
                    [
                        -20.131536,
                        -1.8779833,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-60-6.png \' alt="2634687-60-6" height="250" width="250">',
                    ],
                    [
                        -33.085117,
                        -8.524764,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1442644-14-5.png \' alt="1442644-14-5" height="250" width="250">',
                    ],
                    [
                        -26.361814,
                        4.104253,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1441830-74-5.png \' alt="1441830-74-5" height="250" width="250">',
                    ],
                    [
                        -29.591263,
                        -4.778726,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/950596-31-3.png \' alt="950596-31-3" height="250" width="250">',
                    ],
                    [
                        -31.489584,
                        -0.12089968,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2097145-90-7.png \' alt="2097145-90-7" height="250" width="250">',
                    ],
                    [
                        -32.33031,
                        -13.478338,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-23-6.png \' alt="2757082-23-6" height="250" width="250">',
                    ],
                    [
                        -33.631443,
                        -7.39239,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1227512-69-7.png \' alt="1227512-69-7" height="250" width="250">',
                    ],
                    [
                        -35.96159,
                        -8.3040285,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-67-3.png \' alt="2634687-67-3" height="250" width="250">',
                    ],
                    [
                        -23.859686,
                        0.7683646,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2829282-10-0.png \' alt="2829282-10-0" height="250" width="250">',
                    ],
                    [
                        -17.266537,
                        -7.4398155,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1338454-28-6.png \' alt="1338454-28-6" height="250" width="250">',
                    ],
                    [
                        -35.415707,
                        -5.6842637,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828433-55-0.png \' alt="2828433-55-0" height="250" width="250">',
                    ],
                    [
                        -31.000818,
                        -7.9032087,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1379763-05-9.png \' alt="1379763-05-9" height="250" width="250">',
                    ],
                    [
                        -21.063599,
                        1.7706066,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1359764-39-8.png \' alt="1359764-39-8" height="250" width="250">',
                    ],
                    [
                        -28.790535,
                        -6.1171384,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/189623-45-8.png \' alt="189623-45-8" height="250" width="250">',
                    ],
                    [
                        -34.841625,
                        -1.8848665,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/182122-12-9.png \' alt="182122-12-9" height="250" width="250">',
                    ],
                    [
                        -38.391136,
                        -11.529937,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2412578-71-1.png \' alt="2412578-71-1" height="250" width="250">',
                    ],
                    [
                        -32.31466,
                        -13.502383,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2126903-00-0.png \' alt="2126903-00-0" height="250" width="250">',
                    ],
                    [
                        -35.51952,
                        -19.17954,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-53-2.png \' alt="2757082-53-2" height="250" width="250">',
                    ],
                    [
                        -35.265045,
                        -6.1376557,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/175733-74-1.png \' alt="175733-74-1" height="250" width="250">',
                    ],
                    [
                        -19.520864,
                        -12.088566,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1246401-49-9.png \' alt="1246401-49-9" height="250" width="250">',
                    ],
                    [
                        -43.25239,
                        7.1205873,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757287-32-2.png \' alt="2757287-32-2" height="250" width="250">',
                    ],
                    [
                        -40.177887,
                        -8.29108,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1532531-18-2.png \' alt="1532531-18-2" height="250" width="250">',
                    ],
                    [
                        -38.71081,
                        -11.441254,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2097333-76-9.png \' alt="2097333-76-9" height="250" width="250">',
                    ],
                    [
                        -37.982517,
                        -10.53646,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-22-8.png \' alt="2757083-22-8" height="250" width="250">',
                    ],
                    [
                        -39.320885,
                        -6.610601,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/357209-32-6.png \' alt="357209-32-6" height="250" width="250">',
                    ],
                    [
                        -33.752083,
                        -6.10098,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/195703-68-5.png \' alt="195703-68-5" height="250" width="250">',
                    ],
                    [
                        -34.796925,
                        -9.199014,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-80-5.png \' alt="2757082-80-5" height="250" width="250">',
                    ],
                    [
                        -19.392235,
                        -5.021612,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1807740-34-6.png \' alt="1807740-34-6" height="250" width="250">',
                    ],
                    [
                        -25.218761,
                        7.7314353,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1358991-52-2.png \' alt="1358991-52-2" height="250" width="250">',
                    ],
                    [
                        -38.790108,
                        -1.2582642,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/365281-27-2.png \' alt="365281-27-2" height="250" width="250">',
                    ],
                    [
                        -39.349663,
                        -7.553127,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/185346-09-2.png \' alt="185346-09-2" height="250" width="250">',
                    ],
                    [
                        -36.731403,
                        -16.33117,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-71-4.png \' alt="2757082-71-4" height="250" width="250">',
                    ],
                    [
                        -29.90329,
                        -2.4255967,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2085239-89-8.png \' alt="2085239-89-8" height="250" width="250">',
                    ],
                    [
                        -35.014523,
                        -11.418418,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-29-5.png \' alt="2757083-29-5" height="250" width="250">',
                    ],
                    [
                        -35.71642,
                        -14.215694,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2055935-90-3.png \' alt="2055935-90-3" height="250" width="250">',
                    ],
                    [
                        -22.514725,
                        -15.316542,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757084-64-1.png \' alt="2757084-64-1" height="250" width="250">',
                    ],
                    [
                        -26.361814,
                        4.104253,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2446042-08-4.png \' alt="2446042-08-4" height="250" width="250">',
                    ],
                    [
                        -35.429455,
                        -19.184587,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-48-8.png \' alt="2757083-48-8" height="250" width="250">',
                    ],
                    [
                        -31.876741,
                        -3.392223,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/182122-08-3.png \' alt="182122-08-3" height="250" width="250">',
                    ],
                    [
                        -36.736942,
                        -16.332014,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-48-5.png \' alt="2757082-48-5" height="250" width="250">',
                    ],
                    [
                        -35.730446,
                        -14.254445,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2095128-11-1.png \' alt="2095128-11-1" height="250" width="250">',
                    ],
                    [
                        -35.69703,
                        7.3307424,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1884457-40-2.png \' alt="1884457-40-2" height="250" width="250">',
                    ],
                    [
                        -32.04582,
                        -9.788941,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757085-47-3.png \' alt="2757085-47-3" height="250" width="250">',
                    ],
                    [
                        -34.995483,
                        -11.50289,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-33-1.png \' alt="2757083-33-1" height="250" width="250">',
                    ],
                    [
                        -19.256748,
                        4.36021,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2374958-80-0.png \' alt="2374958-80-0" height="250" width="250">',
                    ],
                    [
                        -39.532192,
                        -5.946974,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-60-1.png \' alt="2757082-60-1" height="250" width="250">',
                    ],
                    [
                        -27.87977,
                        -2.479061,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2005443-90-1.png \' alt="2005443-90-1" height="250" width="250">',
                    ],
                    [
                        -17.266537,
                        -7.4398155,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2448646-14-6.png \' alt="2448646-14-6" height="250" width="250">',
                    ],
                    [
                        -31.113894,
                        -4.7761574,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757085-49-5.png \' alt="2757085-49-5" height="250" width="250">',
                    ],
                    [
                        -36.10345,
                        -8.227428,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1108603-37-7.png \' alt="1108603-37-7" height="250" width="250">',
                    ],
                    [
                        -19.392061,
                        -5.021638,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1456816-37-7.png \' alt="1456816-37-7" height="250" width="250">',
                    ],
                    [
                        -26.689167,
                        -6.608268,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2182671-16-3.png \' alt="2182671-16-3" height="250" width="250">',
                    ],
                    [
                        -41.55357,
                        -14.1185055,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2126902-95-0.png \' alt="2126902-95-0" height="250" width="250">',
                    ],
                    [
                        -32.30387,
                        -2.6812298,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/182122-10-7.png \' alt="182122-10-7" height="250" width="250">',
                    ],
                    [
                        -34.463768,
                        -7.64554,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/201409-47-4.png \' alt="201409-47-4" height="250" width="250">',
                    ],
                    [
                        -26.473757,
                        -12.253815,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2067322-23-8.png \' alt="2067322-23-8" height="250" width="250">',
                    ],
                    [
                        -30.122171,
                        -9.999625,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1239015-11-2.png \' alt="1239015-11-2" height="250" width="250">',
                    ],
                    [
                        -40.265045,
                        -8.42074,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-99-6.png \' alt="2757082-99-6" height="250" width="250">',
                    ],
                    [
                        -35.69703,
                        7.3307424,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1683581-58-9.png \' alt="1683581-58-9" height="250" width="250">',
                    ],
                    [
                        -30.048538,
                        -8.7519865,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/175166-51-5.png \' alt="175166-51-5" height="250" width="250">',
                    ],
                    [
                        -23.859411,
                        0.7688616,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1306747-77-2.png \' alt="1306747-77-2" height="250" width="250">',
                    ],
                    [
                        -31.975592,
                        -5.084271,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1354558-61-4.png \' alt="1354558-61-4" height="250" width="250">',
                    ],
                    [
                        -37.116745,
                        -4.0442653,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/405114-76-3.png \' alt="405114-76-3" height="250" width="250">',
                    ],
                    [
                        -34.499744,
                        -3.3280172,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/182122-13-0.png \' alt="182122-13-0" height="250" width="250">',
                    ],
                    [
                        -41.552456,
                        -7.261903,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-44-1.png \' alt="2757082-44-1" height="250" width="250">',
                    ],
                    [
                        -36.03088,
                        -9.976171,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2321534-63-6.png \' alt="2321534-63-6" height="250" width="250">',
                    ],
                    [
                        -20.1323,
                        -1.8775598,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1835717-07-1.png \' alt="1835717-07-1" height="250" width="250">',
                    ],
                    [
                        -41.792706,
                        -7.3859143,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-63-4.png \' alt="2757082-63-4" height="250" width="250">',
                    ],
                    [
                        -23.143383,
                        -15.204996,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757084-67-4.png \' alt="2757084-67-4" height="250" width="250">',
                    ],
                    [
                        -32.174507,
                        -7.2622094,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1091605-95-6.png \' alt="1091605-95-6" height="250" width="250">',
                    ],
                    [
                        -16.830326,
                        -3.7642226,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1338454-38-8.png \' alt="1338454-38-8" height="250" width="250">',
                    ],
                    [
                        -32.11103,
                        -5.8594785,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/180186-94-1.png \' alt="180186-94-1" height="250" width="250">',
                    ],
                    [
                        -37.07218,
                        -6.786792,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-41-8.png \' alt="2757082-41-8" height="250" width="250">',
                    ],
                    [
                        -41.91196,
                        -9.952561,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-53-5.png \' alt="2757083-53-5" height="250" width="250">',
                    ],
                    [
                        -37.111275,
                        -4.0928617,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2770842-83-4.png \' alt="2770842-83-4" height="250" width="250">',
                    ],
                    [
                        -33.632023,
                        -7.3918395,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/175166-49-1.png \' alt="175166-49-1" height="250" width="250">',
                    ],
                    [
                        -31.028866,
                        6.630843,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2021201-99-8.png \' alt="2021201-99-8" height="250" width="250">',
                    ],
                    [
                        -28.442865,
                        -6.9224877,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-37-2.png \' alt="2757082-37-2" height="250" width="250">',
                    ],
                    [
                        -37.74148,
                        -9.1956215,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/205647-96-7.png \' alt="205647-96-7" height="250" width="250">',
                    ],
                    [
                        -35.227634,
                        -1.8245429,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/188780-28-1.png \' alt="188780-28-1" height="250" width="250">',
                    ],
                    [
                        -29.98901,
                        -6.2909045,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/394738-76-2.png \' alt="394738-76-2" height="250" width="250">',
                    ],
                    [
                        -27.457485,
                        -4.920902,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828439-66-1.png \' alt="2828439-66-1" height="250" width="250">',
                    ],
                    [
                        -33.073788,
                        -4.5245323,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2341858-19-1.png \' alt="2341858-19-1" height="250" width="250">',
                    ],
                    [
                        -20.880978,
                        5.5084047,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2374958-86-6.png \' alt="2374958-86-6" height="250" width="250">',
                    ],
                ],
                label: {
                    show: false,
                    margin: 8,
                },
            },
            {
                type: "scatter",
                name: "class-4",
                symbolSize: 10,
                data: [
                    [
                        -13.130597,
                        13.8550005,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/634180-45-3.png \' alt="634180-45-3" height="250" width="250">',
                    ],
                    [
                        -19.080545,
                        6.107011,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2374958-84-4.png \' alt="2374958-84-4" height="250" width="250">',
                    ],
                    [
                        -16.087597,
                        29.469612,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/180683-64-1.png \' alt="180683-64-1" height="250" width="250">',
                    ],
                    [
                        -9.858658,
                        36.735653,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/128544-05-8.png \' alt="128544-05-8" height="250" width="250">',
                    ],
                    [
                        -20.408112,
                        10.937496,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828440-25-9.png \' alt="2828440-25-9" height="250" width="250">',
                    ],
                    [
                        -3.91721,
                        18.620155,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1223105-91-6.png \' alt="1223105-91-6" height="250" width="250">',
                    ],
                    [
                        -16.999422,
                        7.0822415,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2374958-87-7.png \' alt="2374958-87-7" height="250" width="250">',
                    ],
                    [
                        -15.828873,
                        13.717473,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/877773-30-3.png \' alt="877773-30-3" height="250" width="250">',
                    ],
                    [
                        -11.760484,
                        16.231922,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/33878-70-5.png \' alt="33878-70-5" height="250" width="250">',
                    ],
                    [
                        -17.230183,
                        18.16662,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/118971-03-2.png \' alt="118971-03-2" height="250" width="250">',
                    ],
                    [
                        -19.309196,
                        24.063879,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/22348-32-9.png \' alt="22348-32-9" height="250" width="250">',
                    ],
                    [
                        -14.706937,
                        22.064043,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/848821-76-1.png \' alt="848821-76-1" height="250" width="250">',
                    ],
                    [
                        -7.712419,
                        31.049042,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/218290-24-5.png \' alt="218290-24-5" height="250" width="250">',
                    ],
                    [
                        -10.403952,
                        19.43457,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1356935-80-2.png \' alt="1356935-80-2" height="250" width="250">',
                    ],
                    [
                        -8.513462,
                        25.006306,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/63399-77-9.png \' alt="63399-77-9" height="250" width="250">',
                    ],
                    [
                        -12.66492,
                        18.403933,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/64030-44-0.png \' alt="64030-44-0" height="250" width="250">',
                    ],
                    [
                        -15.577539,
                        17.583403,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/182323-68-8.png \' alt="182323-68-8" height="250" width="250">',
                    ],
                    [
                        -11.225502,
                        24.660862,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2133-34-8.png \' alt="2133-34-8" height="250" width="250">',
                    ],
                    [
                        -12.13578,
                        20.23956,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/904928-30-9.png \' alt="904928-30-9" height="250" width="250">',
                    ],
                    [
                        -13.871704,
                        17.672047,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/428514-91-4.png \' alt="428514-91-4" height="250" width="250">',
                    ],
                    [
                        -15.705906,
                        19.811243,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/913699-13-5.png \' alt="913699-13-5" height="250" width="250">',
                    ],
                    [
                        -5.3432074,
                        16.30763,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/934762-68-2.png \' alt="934762-68-2" height="250" width="250">',
                    ],
                    [
                        -36.37441,
                        21.91336,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1203507-02-1.png \' alt="1203507-02-1" height="250" width="250">',
                    ],
                    [
                        -3.7759628,
                        25.744425,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/860994-58-7.png \' alt="860994-58-7" height="250" width="250">',
                    ],
                    [
                        -34.731762,
                        21.394232,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1316861-19-4.png \' alt="1316861-19-4" height="250" width="250">',
                    ],
                    [
                        -15.870478,
                        21.498798,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/92053-25-3.png \' alt="92053-25-3" height="250" width="250">',
                    ],
                    [
                        -10.080662,
                        23.918304,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/171189-35-8.png \' alt="171189-35-8" height="250" width="250">',
                    ],
                    [
                        -14.629005,
                        18.75554,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/460748-85-0.png \' alt="460748-85-0" height="250" width="250">',
                    ],
                    [
                        -28.014688,
                        12.14507,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/150639-33-1.png \' alt="150639-33-1" height="250" width="250">',
                    ],
                    [
                        -8.428623,
                        24.981907,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/42856-71-3.png \' alt="42856-71-3" height="250" width="250">',
                    ],
                    [
                        -25.027498,
                        29.579088,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/346440-54-8.png \' alt="346440-54-8" height="250" width="250">',
                    ],
                    [
                        -25.230598,
                        19.940434,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/582300-11-6.png \' alt="582300-11-6" height="250" width="250">',
                    ],
                    [
                        -6.069476,
                        14.809896,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/205495-66-5.png \' alt="205495-66-5" height="250" width="250">',
                    ],
                    [
                        -32.390408,
                        23.40698,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/885051-07-0.png \' alt="885051-07-0" height="250" width="250">',
                    ],
                    [
                        -16.131935,
                        18.562054,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/63126-47-6.png \' alt="63126-47-6" height="250" width="250">',
                    ],
                    [
                        -15.05875,
                        20.527782,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/113865-57-9.png \' alt="113865-57-9" height="250" width="250">',
                    ],
                    [
                        -22.468884,
                        11.212141,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2374958-83-3.png \' alt="2374958-83-3" height="250" width="250">',
                    ],
                    [
                        -13.381966,
                        32.482624,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/77450-03-4.png \' alt="77450-03-4" height="250" width="250">',
                    ],
                    [
                        -7.71277,
                        31.049892,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/201551-23-7.png \' alt="201551-23-7" height="250" width="250">',
                    ],
                    [
                        -15.176805,
                        42.253563,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/851615-06-0.png \' alt="851615-06-0" height="250" width="250">',
                    ],
                    [
                        -7.8265715,
                        17.79061,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1570357-03-7.png \' alt="1570357-03-7" height="250" width="250">',
                    ],
                    [
                        -19.039614,
                        13.193706,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2829282-18-8.png \' alt="2829282-18-8" height="250" width="250">',
                    ],
                    [
                        -13.124816,
                        25.356276,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/6734-41-4.png \' alt="6734-41-4" height="250" width="250">',
                    ],
                    [
                        -10.188816,
                        26.068356,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/72580-53-1.png \' alt="72580-53-1" height="250" width="250">',
                    ],
                    [
                        -9.859084,
                        36.735855,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/126613-06-7.png \' alt="126613-06-7" height="250" width="250">',
                    ],
                    [
                        -15.176805,
                        42.253563,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/309934-84-7.png \' alt="309934-84-7" height="250" width="250">',
                    ],
                    [
                        -6.381457,
                        21.932007,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/820242-14-6.png \' alt="820242-14-6" height="250" width="250">',
                    ],
                    [
                        -35.35464,
                        23.428295,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1213233-51-2.png \' alt="1213233-51-2" height="250" width="250">',
                    ],
                    [
                        -11.534734,
                        23.595533,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/35684-65-2.png \' alt="35684-65-2" height="250" width="250">',
                    ],
                    [
                        -13.177064,
                        19.323303,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/60419-23-0.png \' alt="60419-23-0" height="250" width="250">',
                    ],
                    [
                        -14.216956,
                        18.616243,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/69500-64-7.png \' alt="69500-64-7" height="250" width="250">',
                    ],
                    [
                        -23.118448,
                        31.459785,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/415678-40-9.png \' alt="415678-40-9" height="250" width="250">',
                    ],
                    [
                        -17.343597,
                        16.678425,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1100289-57-3.png \' alt="1100289-57-3" height="250" width="250">',
                    ],
                    [
                        -13.868506,
                        20.992657,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/948595-00-4.png \' alt="948595-00-4" height="250" width="250">',
                    ],
                    [
                        -6.4039507,
                        21.940506,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1221442-12-1.png \' alt="1221442-12-1" height="250" width="250">',
                    ],
                    [
                        -16.429205,
                        29.651094,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/146504-07-6.png \' alt="146504-07-6" height="250" width="250">',
                    ],
                    [
                        -28.941748,
                        11.660228,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1251471-84-7.png \' alt="1251471-84-7" height="250" width="250">',
                    ],
                    [
                        -26.513247,
                        13.033383,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1192113-21-5.png \' alt="1192113-21-5" height="250" width="250">',
                    ],
                    [
                        -8.866849,
                        25.983557,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1932110-51-4.png \' alt="1932110-51-4" height="250" width="250">',
                    ],
                    [
                        -34.702564,
                        21.322815,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1015248-96-0.png \' alt="1015248-96-0" height="250" width="250">',
                    ],
                    [
                        -3.7329104,
                        25.631851,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1027476-96-5.png \' alt="1027476-96-5" height="250" width="250">',
                    ],
                    [
                        -36.37981,
                        22.00099,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1699751-03-5.png \' alt="1699751-03-5" height="250" width="250">',
                    ],
                    [
                        -18.274546,
                        21.571363,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1146629-74-4.png \' alt="1146629-74-4" height="250" width="250">',
                    ],
                    [
                        -14.53798,
                        19.175663,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/124779-66-4.png \' alt="124779-66-4" height="250" width="250">',
                    ],
                    [
                        -13.377378,
                        32.48221,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/61478-26-0.png \' alt="61478-26-0" height="250" width="250">',
                    ],
                    [
                        -8.139841,
                        12.83343,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1568087-94-4.png \' alt="1568087-94-4" height="250" width="250">',
                    ],
                    [
                        -13.872064,
                        10.951101,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/519038-82-5.png \' alt="519038-82-5" height="250" width="250">',
                    ],
                    [
                        -3.361654,
                        22.946402,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/851477-20-8.png \' alt="851477-20-8" height="250" width="250">',
                    ],
                    [
                        -20.825321,
                        8.5063505,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1827669-26-0.png \' alt="1827669-26-0" height="250" width="250">',
                    ],
                    [
                        -8.088485,
                        16.504871,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1312991-08-4.png \' alt="1312991-08-4" height="250" width="250">',
                    ],
                    [
                        -14.241319,
                        19.575815,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/137037-20-8.png \' alt="137037-20-8" height="250" width="250">',
                    ],
                    [
                        -2.9675012,
                        25.01684,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1233369-39-5.png \' alt="1233369-39-5" height="250" width="250">',
                    ],
                    [
                        -8.084389,
                        16.198322,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1211565-08-0.png \' alt="1211565-08-0" height="250" width="250">',
                    ],
                    [
                        -12.446847,
                        22.153019,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/7531-52-4.png \' alt="7531-52-4" height="250" width="250">',
                    ],
                    [
                        -23.241386,
                        14.657824,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/915296-01-4.png \' alt="915296-01-4" height="250" width="250">',
                    ],
                    [
                        -12.01888,
                        25.546295,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/34592-47-7.png \' alt="34592-47-7" height="250" width="250">',
                    ],
                    [
                        -16.13184,
                        15.945024,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/946074-05-1.png \' alt="946074-05-1" height="250" width="250">',
                    ],
                    [
                        -11.573143,
                        24.980673,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/7729-30-8.png \' alt="7729-30-8" height="250" width="250">',
                    ],
                    [
                        -20.779858,
                        9.184295,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828444-14-8.png \' alt="2828444-14-8" height="250" width="250">',
                    ],
                    [
                        -5.885681,
                        19.59347,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1542197-69-2.png \' alt="1542197-69-2" height="250" width="250">',
                    ],
                    [
                        -27.971373,
                        37.570835,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/791616-58-5.png \' alt="791616-58-5" height="250" width="250">',
                    ],
                    [
                        -21.193422,
                        7.828783,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2374958-79-7.png \' alt="2374958-79-7" height="250" width="250">',
                    ],
                    [
                        -16.51712,
                        29.706635,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/184954-75-4.png \' alt="184954-75-4" height="250" width="250">',
                    ],
                    [
                        -12.832244,
                        26.761572,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/80875-98-5.png \' alt="80875-98-5" height="250" width="250">',
                    ],
                    [
                        -29.424948,
                        17.024614,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2829282-09-7.png \' alt="2829282-09-7" height="250" width="250">',
                    ],
                    [
                        -2.816399,
                        22.295797,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1429516-79-9.png \' alt="1429516-79-9" height="250" width="250">',
                    ],
                    [
                        -10.412041,
                        20.595226,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/782495-18-5.png \' alt="782495-18-5" height="250" width="250">',
                    ],
                    [
                        -18.598156,
                        18.606764,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/209627-36-1.png \' alt="209627-36-1" height="250" width="250">',
                    ],
                    [
                        -7.1323333,
                        31.64899,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/172138-95-3.png \' alt="172138-95-3" height="250" width="250">',
                    ],
                    [
                        -27.971373,
                        37.570835,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1621066-21-4.png \' alt="1621066-21-4" height="250" width="250">',
                    ],
                    [
                        -7.9605,
                        14.808833,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1223105-93-8.png \' alt="1223105-93-8" height="250" width="250">',
                    ],
                    [
                        -15.102339,
                        28.970156,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/412278-24-1.png \' alt="412278-24-1" height="250" width="250">',
                    ],
                    [
                        -16.13196,
                        18.550972,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/84025-81-0.png \' alt="84025-81-0" height="250" width="250">',
                    ],
                    [
                        -24.886576,
                        22.648935,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/213843-95-9.png \' alt="213843-95-9" height="250" width="250">',
                    ],
                    [
                        -11.845964,
                        25.606834,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/45521-09-3.png \' alt="45521-09-3" height="250" width="250">',
                    ],
                    [
                        -21.589108,
                        42.681084,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/828927-96-4.png \' alt="828927-96-4" height="250" width="250">',
                    ],
                    [
                        -10.40476,
                        24.598879,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/3105-95-1.png \' alt="3105-95-1" height="250" width="250">',
                    ],
                    [
                        -23.804482,
                        29.090097,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1276111-19-3.png \' alt="1276111-19-3" height="250" width="250">',
                    ],
                    [
                        -23.795782,
                        30.785948,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/415678-56-7.png \' alt="415678-56-7" height="250" width="250">',
                    ],
                    [
                        -3.8782284,
                        23.05813,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1244061-69-5.png \' alt="1244061-69-5" height="250" width="250">',
                    ],
                    [
                        -20.409851,
                        19.406233,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/943757-71-9.png \' alt="943757-71-9" height="250" width="250">',
                    ],
                    [
                        -31.438799,
                        23.575714,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1239015-83-8.png \' alt="1239015-83-8" height="250" width="250">',
                    ],
                    [
                        -4.717207,
                        24.691822,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1140969-69-2.png \' alt="1140969-69-2" height="250" width="250">',
                    ],
                    [
                        -18.399794,
                        36.72997,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/121457-42-9.png \' alt="121457-42-9" height="250" width="250">',
                    ],
                    [
                        -28.991713,
                        11.635052,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1442644-13-4.png \' alt="1442644-13-4" height="250" width="250">',
                    ],
                    [
                        -18.167683,
                        15.976134,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1061307-56-9.png \' alt="1061307-56-9" height="250" width="250">',
                    ],
                    [
                        -10.424628,
                        20.645445,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1186049-30-8.png \' alt="1186049-30-8" height="250" width="250">',
                    ],
                    [
                        -16.569845,
                        21.94125,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/131180-52-4.png \' alt="131180-52-4" height="250" width="250">',
                    ],
                    [
                        -4.3109994,
                        26.68552,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/743458-79-9.png \' alt="743458-79-9" height="250" width="250">',
                    ],
                    [
                        -16.846554,
                        20.123966,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/908303-26-4.png \' alt="908303-26-4" height="250" width="250">',
                    ],
                    [
                        -12.281508,
                        24.341818,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/344-25-2.png \' alt="344-25-2" height="250" width="250">',
                    ],
                    [
                        -20.807493,
                        19.990726,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/848821-58-9.png \' alt="848821-58-9" height="250" width="250">',
                    ],
                    [
                        -13.593942,
                        33.32637,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/61478-28-2.png \' alt="61478-28-2" height="250" width="250">',
                    ],
                    [
                        -4.8007083,
                        18.590984,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1263205-96-4.png \' alt="1263205-96-4" height="250" width="250">',
                    ],
                    [
                        -20.743315,
                        18.825197,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1236033-34-3.png \' alt="1236033-34-3" height="250" width="250">',
                    ],
                    [
                        -18.968155,
                        5.3648767,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2374958-82-2.png \' alt="2374958-82-2" height="250" width="250">',
                    ],
                    [
                        -15.968442,
                        23.144524,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/131180-63-7.png \' alt="131180-63-7" height="250" width="250">',
                    ],
                    [
                        -19.250072,
                        17.804508,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/864466-71-7.png \' alt="864466-71-7" height="250" width="250">',
                    ],
                    [
                        -14.616659,
                        16.627554,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/22348-31-8.png \' alt="22348-31-8" height="250" width="250">',
                    ],
                    [
                        -11.384236,
                        11.833639,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1150113-65-7.png \' alt="1150113-65-7" height="250" width="250">',
                    ],
                    [
                        -29.425213,
                        17.024406,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1306747-78-3.png \' alt="1306747-78-3" height="250" width="250">',
                    ],
                    [
                        -4.320796,
                        29.4388,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/161344-84-9.png \' alt="161344-84-9" height="250" width="250">',
                    ],
                    [
                        -34.991817,
                        23.198662,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1214921-55-7.png \' alt="1214921-55-7" height="250" width="250">',
                    ],
                    [
                        -9.891512,
                        11.198317,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/174758-63-5.png \' alt="174758-63-5" height="250" width="250">',
                    ],
                    [
                        -23.777815,
                        29.19968,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/390766-89-9.png \' alt="390766-89-9" height="250" width="250">',
                    ],
                    [
                        -32.48227,
                        23.446238,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1415839-18-7.png \' alt="1415839-18-7" height="250" width="250">',
                    ],
                    [
                        -35.329582,
                        23.461761,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1899061-68-7.png \' alt="1899061-68-7" height="250" width="250">',
                    ],
                    [
                        -11.362975,
                        27.336416,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/79815-20-6.png \' alt="79815-20-6" height="250" width="250">',
                    ],
                    [
                        -12.330703,
                        24.752655,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/147-85-3.png \' alt="147-85-3" height="250" width="250">',
                    ],
                    [
                        -12.462842,
                        22.11034,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/62937-45-5.png \' alt="62937-45-5" height="250" width="250">',
                    ],
                    [
                        -19.349108,
                        24.059982,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/112068-01-6.png \' alt="112068-01-6" height="250" width="250">',
                    ],
                    [
                        -13.1176815,
                        13.878943,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/634180-49-7.png \' alt="634180-49-7" height="250" width="250">',
                    ],
                    [
                        -17.13241,
                        10.841931,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2635339-85-2.png \' alt="2635339-85-2" height="250" width="250">',
                    ],
                    [
                        -21.169058,
                        29.017302,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/132278-63-8.png \' alt="132278-63-8" height="250" width="250">',
                    ],
                    [
                        -9.091983,
                        30.59531,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/174810-09-4.png \' alt="174810-09-4" height="250" width="250">',
                    ],
                    [
                        -11.236603,
                        24.265804,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1723-00-8.png \' alt="1723-00-8" height="250" width="250">',
                    ],
                    [
                        -31.655643,
                        23.54275,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1415839-22-3.png \' alt="1415839-22-3" height="250" width="250">',
                    ],
                    [
                        -21.589108,
                        42.681084,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/828927-97-5.png \' alt="828927-97-5" height="250" width="250">',
                    ],
                    [
                        -12.346572,
                        16.848398,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/702700-79-6.png \' alt="702700-79-6" height="250" width="250">',
                    ],
                    [
                        -1.7088803,
                        26.72829,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1005003-43-9.png \' alt="1005003-43-9" height="250" width="250">',
                    ],
                    [
                        -18.399794,
                        36.72997,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/139139-92-7.png \' alt="139139-92-7" height="250" width="250">',
                    ],
                    [
                        -18.2994,
                        20.114296,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/848821-61-4.png \' alt="848821-61-4" height="250" width="250">',
                    ],
                    [
                        -9.752198,
                        27.745552,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2250216-09-0.png \' alt="2250216-09-0" height="250" width="250">',
                    ],
                    [
                        -5.4111114,
                        18.998634,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1312991-15-3.png \' alt="1312991-15-3" height="250" width="250">',
                    ],
                    [
                        -10.178173,
                        26.096893,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/72580-54-2.png \' alt="72580-54-2" height="250" width="250">',
                    ],
                    [
                        -17.415318,
                        24.33274,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/130798-48-0.png \' alt="130798-48-0" height="250" width="250">',
                    ],
                    [
                        -25.096289,
                        29.587172,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/97443-96-4.png \' alt="97443-96-4" height="250" width="250">',
                    ],
                    [
                        -16.770079,
                        8.218432,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2374958-96-8.png \' alt="2374958-96-8" height="250" width="250">',
                    ],
                    [
                        -14.852763,
                        11.036698,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/877773-38-1.png \' alt="877773-38-1" height="250" width="250">',
                    ],
                    [
                        -14.14383,
                        16.278782,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/119237-64-8.png \' alt="119237-64-8" height="250" width="250">',
                    ],
                    [
                        -22.962965,
                        31.540958,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/877303-84-9.png \' alt="877303-84-9" height="250" width="250">',
                    ],
                    [
                        -9.789457,
                        13.998274,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1003922-03-9.png \' alt="1003922-03-9" height="250" width="250">',
                    ],
                    [
                        -14.241746,
                        23.807117,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/719999-54-9.png \' alt="719999-54-9" height="250" width="250">',
                    ],
                    [
                        -10.582491,
                        17.549234,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/128959-89-7.png \' alt="128959-89-7" height="250" width="250">',
                    ],
                ],
                label: {
                    show: false,
                    margin: 8,
                },
            },
            {
                type: "scatter",
                name: "class-5",
                symbolSize: 10,
                data: [
                    [
                        24.165367,
                        -30.285503,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1217901-32-0.png \' alt="1217901-32-0" height="250" width="250">',
                    ],
                    [
                        14.020812,
                        -5.569454,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/210169-57-6.png \' alt="210169-57-6" height="250" width="250">',
                    ],
                    [
                        33.33329,
                        -23.67998,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/145238-45-5.png \' alt="145238-45-5" height="250" width="250">',
                    ],
                    [
                        15.499965,
                        -0.06840149,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/473727-83-2.png \' alt="473727-83-2" height="250" width="250">',
                    ],
                    [
                        19.24536,
                        -21.087053,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1477517-18-2.png \' alt="1477517-18-2" height="250" width="250">',
                    ],
                    [
                        17.305584,
                        -22.966164,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1246888-90-3.png \' alt="1246888-90-3" height="250" width="250">',
                    ],
                    [
                        34.296154,
                        -8.935105,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1389329-66-1.png \' alt="1389329-66-1" height="250" width="250">',
                    ],
                    [
                        22.499958,
                        -8.345065,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1891002-61-1.png \' alt="1891002-61-1" height="250" width="250">',
                    ],
                    [
                        47.483402,
                        -3.5305667,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1191451-23-6.png \' alt="1191451-23-6" height="250" width="250">',
                    ],
                    [
                        21.793156,
                        -9.092214,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1542796-14-4.png \' alt="1542796-14-4" height="250" width="250">',
                    ],
                    [
                        9.840153,
                        -14.15017,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757084-61-8.png \' alt="2757084-61-8" height="250" width="250">',
                    ],
                    [
                        23.667267,
                        -15.427763,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1542796-16-6.png \' alt="1542796-16-6" height="250" width="250">',
                    ],
                    [
                        33.33329,
                        -23.67998,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/131180-90-0.png \' alt="131180-90-0" height="250" width="250">',
                    ],
                    [
                        29.44194,
                        0.6336233,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/75714-59-9.png \' alt="75714-59-9" height="250" width="250">',
                    ],
                    [
                        23.667267,
                        -15.427763,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1777796-37-8.png \' alt="1777796-37-8" height="250" width="250">',
                    ],
                    [
                        15.360664,
                        -10.652202,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1610785-35-7.png \' alt="1610785-35-7" height="250" width="250">',
                    ],
                    [
                        34.761242,
                        -3.9158146,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/133545-25-2.png \' alt="133545-25-2" height="250" width="250">',
                    ],
                    [
                        10.32571,
                        -8.476882,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1808220-99-6.png \' alt="1808220-99-6" height="250" width="250">',
                    ],
                    [
                        30.790987,
                        -28.904833,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2070926-11-1.png \' alt="2070926-11-1" height="250" width="250">',
                    ],
                    [
                        24.297045,
                        -0.8266266,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/362634-22-8.png \' alt="362634-22-8" height="250" width="250">',
                    ],
                    [
                        16.529018,
                        -13.163148,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1788085-47-1.png \' alt="1788085-47-1" height="250" width="250">',
                    ],
                    [
                        38.453995,
                        -1.8451847,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/145214-59-1.png \' alt="145214-59-1" height="250" width="250">',
                    ],
                    [
                        30.102764,
                        -12.663091,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/500997-66-0.png \' alt="500997-66-0" height="250" width="250">',
                    ],
                    [
                        30.790987,
                        -28.904833,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2543900-12-3.png \' alt="2543900-12-3" height="250" width="250">',
                    ],
                    [
                        21.504839,
                        -7.3107877,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1891002-60-0.png \' alt="1891002-60-0" height="250" width="250">',
                    ],
                    [
                        18.62751,
                        -22.388403,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2227217-19-6.png \' alt="2227217-19-6" height="250" width="250">',
                    ],
                    [
                        20.134346,
                        -22.705631,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1477517-21-7.png \' alt="1477517-21-7" height="250" width="250">',
                    ],
                    [
                        14.020812,
                        -5.569454,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/850253-53-1.png \' alt="850253-53-1" height="250" width="250">',
                    ],
                    [
                        20.124609,
                        -22.680962,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2247162-97-4.png \' alt="2247162-97-4" height="250" width="250">',
                    ],
                    [
                        42.813087,
                        -15.7933,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1365531-85-6.png \' alt="1365531-85-6" height="250" width="250">',
                    ],
                    [
                        38.958447,
                        -21.709223,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/246223-35-8.png \' alt="246223-35-8" height="250" width="250">',
                    ],
                    [
                        17.492565,
                        -15.27435,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1908442-13-6.png \' alt="1908442-13-6" height="250" width="250">',
                    ],
                    [
                        47.483402,
                        -3.5305667,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1620003-88-4.png \' alt="1620003-88-4" height="250" width="250">',
                    ],
                    [
                        36.85115,
                        -10.37744,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/389130-06-7.png \' alt="389130-06-7" height="250" width="250">',
                    ],
                    [
                        37.052544,
                        -9.634924,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/208593-05-9.png \' alt="208593-05-9" height="250" width="250">',
                    ],
                    [
                        37.12733,
                        -11.953919,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/804567-14-4.png \' alt="804567-14-4" height="250" width="250">',
                    ],
                    [
                        30.416023,
                        -4.469798,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/765312-57-0.png \' alt="765312-57-0" height="250" width="250">',
                    ],
                    [
                        34.899128,
                        -9.4143,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/479413-76-8.png \' alt="479413-76-8" height="250" width="250">',
                    ],
                    [
                        20.887314,
                        -14.6497,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1202033-19-9.png \' alt="1202033-19-9" height="250" width="250">',
                    ],
                    [
                        26.361477,
                        -4.0975895,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/503538-69-0.png \' alt="503538-69-0" height="250" width="250">',
                    ],
                    [
                        18.344048,
                        2.6057734,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/65355-00-2.png \' alt="65355-00-2" height="250" width="250">',
                    ],
                    [
                        21.933064,
                        -14.253624,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1788085-46-0.png \' alt="1788085-46-0" height="250" width="250">',
                    ],
                    [
                        41.72703,
                        -4.849417,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/256390-47-3.png \' alt="256390-47-3" height="250" width="250">',
                    ],
                    [
                        15.09304,
                        -9.144775,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2301856-53-9.png \' alt="2301856-53-9" height="250" width="250">',
                    ],
                    [
                        9.246767,
                        -11.713942,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/188780-32-7.png \' alt="188780-32-7" height="250" width="250">',
                    ],
                    [
                        15.3459,
                        -10.6672325,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1202033-17-7.png \' alt="1202033-17-7" height="250" width="250">',
                    ],
                    [
                        20.932116,
                        -2.4633176,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/139139-86-9.png \' alt="139139-86-9" height="250" width="250">',
                    ],
                    [
                        20.964506,
                        -23.274433,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1373432-13-3.png \' alt="1373432-13-3" height="250" width="250">',
                    ],
                    [
                        36.85115,
                        -10.37744,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/444311-00-6.png \' alt="444311-00-6" height="250" width="250">',
                    ],
                    [
                        13.968052,
                        -22.087265,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2021202-03-7.png \' alt="2021202-03-7" height="250" width="250">',
                    ],
                    [
                        22.254845,
                        -8.375481,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1884594-02-8.png \' alt="1884594-02-8" height="250" width="250">',
                    ],
                    [
                        20.570784,
                        -7.2130804,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-21-2.png \' alt="2565792-21-2" height="250" width="250">',
                    ],
                    [
                        30.416023,
                        -4.469798,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/765312-54-7.png \' alt="765312-54-7" height="250" width="250">',
                    ],
                    [
                        31.782558,
                        -16.3632,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/500997-67-1.png \' alt="500997-67-1" height="250" width="250">',
                    ],
                    [
                        20.935116,
                        -2.4618406,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/139139-93-8.png \' alt="139139-93-8" height="250" width="250">',
                    ],
                    [
                        17.432837,
                        -22.06552,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1338454-03-7.png \' alt="1338454-03-7" height="250" width="250">',
                    ],
                    [
                        20.802143,
                        -18.981607,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1477517-19-3.png \' alt="1477517-19-3" height="250" width="250">',
                    ],
                    [
                        11.446488,
                        -18.329124,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/861718-64-1.png \' alt="861718-64-1" height="250" width="250">',
                    ],
                    [
                        18.081812,
                        -0.83390415,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/137536-94-8.png \' alt="137536-94-8" height="250" width="250">',
                    ],
                    [
                        19.077625,
                        -22.766066,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-73-1.png \' alt="2634687-73-1" height="250" width="250">',
                    ],
                    [
                        17.361942,
                        -9.067825,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2415751-83-4.png \' alt="2415751-83-4" height="250" width="250">',
                    ],
                    [
                        34.609722,
                        0.5217446,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/212191-84-9.png \' alt="212191-84-9" height="250" width="250">',
                    ],
                    [
                        25.351458,
                        3.091558,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/211560-97-3.png \' alt="211560-97-3" height="250" width="250">',
                    ],
                    [
                        29.653353,
                        -13.703037,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/443965-14-8.png \' alt="443965-14-8" height="250" width="250">',
                    ],
                    [
                        24.297045,
                        -0.8266266,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/394248-45-4.png \' alt="394248-45-4" height="250" width="250">',
                    ],
                    [
                        21.807346,
                        -18.7485,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2003230-67-7.png \' alt="2003230-67-7" height="250" width="250">',
                    ],
                    [
                        20.674282,
                        -18.593649,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1435940-21-8.png \' alt="1435940-21-8" height="250" width="250">',
                    ],
                    [
                        17.305584,
                        -22.966164,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1373432-09-7.png \' alt="1373432-09-7" height="250" width="250">',
                    ],
                    [
                        16.383904,
                        1.8938559,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1263205-97-5.png \' alt="1263205-97-5" height="250" width="250">',
                    ],
                    [
                        38.453995,
                        -1.8451847,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/145214-57-9.png \' alt="145214-57-9" height="250" width="250">',
                    ],
                    [
                        28.442509,
                        -13.794575,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/443965-10-4.png \' alt="443965-10-4" height="250" width="250">',
                    ],
                    [
                        18.528479,
                        -20.164955,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1884457-36-6.png \' alt="1884457-36-6" height="250" width="250">',
                    ],
                    [
                        28.445436,
                        -8.858883,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1361055-07-3.png \' alt="1361055-07-3" height="250" width="250">',
                    ],
                    [
                        26.36209,
                        -4.097455,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/503538-70-3.png \' alt="503538-70-3" height="250" width="250">',
                    ],
                    [
                        14.916857,
                        -2.0424664,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1442645-05-7.png \' alt="1442645-05-7" height="250" width="250">',
                    ],
                    [
                        37.13852,
                        -12.045482,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/625090-99-5.png \' alt="625090-99-5" height="250" width="250">',
                    ],
                    [
                        28.120344,
                        0.2150541,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/705281-18-1.png \' alt="705281-18-1" height="250" width="250">',
                    ],
                    [
                        21.225342,
                        -14.959422,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1542796-07-5.png \' alt="1542796-07-5" height="250" width="250">',
                    ],
                    [
                        14.752885,
                        -13.784175,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2207601-12-3.png \' alt="2207601-12-3" height="250" width="250">',
                    ],
                    [
                        12.448576,
                        -2.8941002,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-48-3.png \' alt="2565792-48-3" height="250" width="250">',
                    ],
                    [
                        27.817999,
                        -20.791943,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/500103-26-4.png \' alt="500103-26-4" height="250" width="250">',
                    ],
                    [
                        20.345991,
                        -14.404273,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1228758-57-3.png \' alt="1228758-57-3" height="250" width="250">',
                    ],
                    [
                        29.441233,
                        0.6336216,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/75714-60-2.png \' alt="75714-60-2" height="250" width="250">',
                    ],
                    [
                        34.609615,
                        0.5217633,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/219757-68-3.png \' alt="219757-68-3" height="250" width="250">',
                    ],
                    [
                        17.649076,
                        -9.149936,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1884594-03-9.png \' alt="1884594-03-9" height="250" width="250">',
                    ],
                    [
                        21.581646,
                        -15.072598,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-52-9.png \' alt="2565792-52-9" height="250" width="250">',
                    ],
                    [
                        11.032741,
                        -8.2676,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2829282-16-6.png \' alt="2829282-16-6" height="250" width="250">',
                    ],
                    [
                        23.180536,
                        -7.2398353,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1435940-19-4.png \' alt="1435940-19-4" height="250" width="250">',
                    ],
                    [
                        25.36034,
                        3.045417,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/179866-74-1.png \' alt="179866-74-1" height="250" width="250">',
                    ],
                    [
                        13.165937,
                        -10.604272,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1202033-21-3.png \' alt="1202033-21-3" height="250" width="250">',
                    ],
                    [
                        29.150137,
                        -15.823865,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/500997-70-6.png \' alt="500997-70-6" height="250" width="250">',
                    ],
                    [
                        41.72731,
                        -4.8494873,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/927396-01-8.png \' alt="927396-01-8" height="250" width="250">',
                    ],
                    [
                        19.958652,
                        -6.75755,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1884680-45-8.png \' alt="1884680-45-8" height="250" width="250">',
                    ],
                    [
                        17.164455,
                        -3.3831162,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/791616-59-6.png \' alt="791616-59-6" height="250" width="250">',
                    ],
                    [
                        14.406308,
                        -15.3380785,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1884680-48-1.png \' alt="1884680-48-1" height="250" width="250">',
                    ],
                    [
                        29.661575,
                        2.5047271,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/142010-87-5.png \' alt="142010-87-5" height="250" width="250">',
                    ],
                    [
                        21.85093,
                        3.4594553,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/150971-35-0.png \' alt="150971-35-0" height="250" width="250">',
                    ],
                    [
                        17.05893,
                        -4.0738053,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1264573-23-0.png \' alt="1264573-23-0" height="250" width="250">',
                    ],
                    [
                        34.761242,
                        -3.9158146,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/133545-24-1.png \' alt="133545-24-1" height="250" width="250">',
                    ],
                    [
                        10.245824,
                        -8.472135,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1808220-75-8.png \' alt="1808220-75-8" height="250" width="250">',
                    ],
                    [
                        21.94053,
                        -8.152651,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1477517-20-6.png \' alt="1477517-20-6" height="250" width="250">',
                    ],
                    [
                        29.694412,
                        2.4998467,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/211734-49-5.png \' alt="211734-49-5" height="250" width="250">',
                    ],
                    [
                        15.576355,
                        -14.281499,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2214207-74-4.png \' alt="2214207-74-4" height="250" width="250">',
                    ],
                    [
                        19.265085,
                        -12.388082,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-33-6.png \' alt="2565792-33-6" height="250" width="250">',
                    ],
                    [
                        38.958447,
                        -21.709223,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/172617-14-0.png \' alt="172617-14-0" height="250" width="250">',
                    ],
                    [
                        30.102764,
                        -12.663091,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/477559-80-1.png \' alt="477559-80-1" height="250" width="250">',
                    ],
                    [
                        18.84659,
                        -19.790335,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1373432-11-1.png \' alt="1373432-11-1" height="250" width="250">',
                    ],
                    [
                        15.606439,
                        -14.410034,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2207601-10-1.png \' alt="2207601-10-1" height="250" width="250">',
                    ],
                    [
                        42.814175,
                        -15.791532,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1365531-84-5.png \' alt="1365531-84-5" height="250" width="250">',
                    ],
                    [
                        24.165367,
                        -30.285503,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/861909-30-0.png \' alt="861909-30-0" height="250" width="250">',
                    ],
                    [
                        20.589226,
                        -21.281105,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-77-8.png \' alt="2565792-77-8" height="250" width="250">',
                    ],
                    [
                        18.34502,
                        2.604636,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/65355-14-8.png \' alt="65355-14-8" height="250" width="250">',
                    ],
                    [
                        21.57101,
                        4.225698,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/150971-45-2.png \' alt="150971-45-2" height="250" width="250">',
                    ],
                    [
                        21.302666,
                        0.5279037,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1642865-72-2.png \' alt="1642865-72-2" height="250" width="250">',
                    ],
                    [
                        31.782558,
                        -16.3632,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/477559-83-4.png \' alt="477559-83-4" height="250" width="250">',
                    ],
                    [
                        23.08954,
                        -9.20671,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-34-7.png \' alt="2565792-34-7" height="250" width="250">',
                    ],
                    [
                        15.821539,
                        -21.782215,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2351219-88-8.png \' alt="2351219-88-8" height="250" width="250">',
                    ],
                    [
                        14.342149,
                        -12.800099,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2214207-75-5.png \' alt="2214207-75-5" height="250" width="250">',
                    ],
                    [
                        27.7985,
                        -20.771984,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/376355-58-7.png \' alt="376355-58-7" height="250" width="250">',
                    ],
                    [
                        38.174313,
                        -9.671366,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/948309-50-0.png \' alt="948309-50-0" height="250" width="250">',
                    ],
                    [
                        15.779502,
                        -15.734661,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-63-2.png \' alt="2565792-63-2" height="250" width="250">',
                    ],
                    [
                        16.937431,
                        -7.526119,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-61-7.png \' alt="2634687-61-7" height="250" width="250">',
                    ],
                    [
                        28.445436,
                        -8.858883,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1361055-04-0.png \' alt="1361055-04-0" height="250" width="250">',
                    ],
                    [
                        18.83218,
                        1.5596439,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2635339-78-3.png \' alt="2635339-78-3" height="250" width="250">',
                    ],
                    [
                        30.423563,
                        -14.158076,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/500997-68-2.png \' alt="500997-68-2" height="250" width="250">',
                    ],
                ],
                label: {
                    show: false,
                    margin: 8,
                },
            },
            {
                type: "scatter",
                name: "class-6",
                symbolSize: 10,
                data: [
                    [
                        -11.196038,
                        -34.105724,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/265127-66-0.png \' alt="265127-66-0" height="250" width="250">',
                    ],
                    [
                        -6.574889,
                        -22.49994,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-80-0.png \' alt="2634687-80-0" height="250" width="250">',
                    ],
                    [
                        -12.586909,
                        -29.826113,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1080596-47-9.png \' alt="1080596-47-9" height="250" width="250">',
                    ],
                    [
                        9.181637,
                        -17.087105,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/944836-02-6.png \' alt="944836-02-6" height="250" width="250">',
                    ],
                    [
                        5.937289,
                        -33.20465,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/321848-65-1.png \' alt="321848-65-1" height="250" width="250">',
                    ],
                    [
                        -16.927671,
                        -21.14635,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1884128-70-4.png \' alt="1884128-70-4" height="250" width="250">',
                    ],
                    [
                        5.5792723,
                        -23.236298,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2328083-86-7.png \' alt="2328083-86-7" height="250" width="250">',
                    ],
                    [
                        -16.568548,
                        -22.946583,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1615699-79-0.png \' alt="1615699-79-0" height="250" width="250">',
                    ],
                    [
                        -6.6285567,
                        -18.174877,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/131833-93-7.png \' alt="131833-93-7" height="250" width="250">',
                    ],
                    [
                        -7.355249,
                        -16.911865,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1379452-52-4.png \' alt="1379452-52-4" height="250" width="250">',
                    ],
                    [
                        10.827235,
                        -36.801426,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828432-14-8.png \' alt="2828432-14-8" height="250" width="250">',
                    ],
                    [
                        -0.72139895,
                        -26.814167,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2270178-41-9.png \' alt="2270178-41-9" height="250" width="250">',
                    ],
                    [
                        -14.680421,
                        -11.780289,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2185014-90-6.png \' alt="2185014-90-6" height="250" width="250">',
                    ],
                    [
                        -3.2064579,
                        -23.878946,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-37-5.png \' alt="2757083-37-5" height="250" width="250">',
                    ],
                    [
                        -11.585179,
                        -22.622,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/160191-64-0.png \' alt="160191-64-0" height="250" width="250">',
                    ],
                    [
                        2.0829449,
                        -13.243107,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/119165-69-4.png \' alt="119165-69-4" height="250" width="250">',
                    ],
                    [
                        -0.36283395,
                        -24.874683,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2270178-45-3.png \' alt="2270178-45-3" height="250" width="250">',
                    ],
                    [
                        -11.813997,
                        -19.069714,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1192345-90-6.png \' alt="1192345-90-6" height="250" width="250">',
                    ],
                    [
                        -4.8304076,
                        -29.614605,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/135565-31-0.png \' alt="135565-31-0" height="250" width="250">',
                    ],
                    [
                        -13.600566,
                        -24.94287,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2279976-00-8.png \' alt="2279976-00-8" height="250" width="250">',
                    ],
                    [
                        -4.7389555,
                        -34.708305,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-72-5.png \' alt="2757082-72-5" height="250" width="250">',
                    ],
                    [
                        8.458785,
                        -25.09722,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757084-62-9.png \' alt="2757084-62-9" height="250" width="250">',
                    ],
                    [
                        4.5937796,
                        -17.473778,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1314098-38-8.png \' alt="1314098-38-8" height="250" width="250">',
                    ],
                    [
                        2.8201182,
                        -14.321426,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/109660-12-0.png \' alt="109660-12-0" height="250" width="250">',
                    ],
                    [
                        1.526747,
                        -11.951681,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/202191-12-6.png \' alt="202191-12-6" height="250" width="250">',
                    ],
                    [
                        -13.435265,
                        -18.48693,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/195515-48-1.png \' alt="195515-48-1" height="250" width="250">',
                    ],
                    [
                        -7.626701,
                        -15.706971,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828432-04-6.png \' alt="2828432-04-6" height="250" width="250">',
                    ],
                    [
                        -0.36761647,
                        -17.16234,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757084-52-7.png \' alt="2757084-52-7" height="250" width="250">',
                    ],
                    [
                        9.19639,
                        -24.956514,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757084-56-1.png \' alt="2757084-56-1" height="250" width="250">',
                    ],
                    [
                        -9.204231,
                        -30.8813,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2490297-23-7.png \' alt="2490297-23-7" height="250" width="250">',
                    ],
                    [
                        -1.0158271,
                        -14.686241,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1862251-64-6.png \' alt="1862251-64-6" height="250" width="250">',
                    ],
                    [
                        -6.0312877,
                        -26.80836,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/132098-54-5.png \' alt="132098-54-5" height="250" width="250">',
                    ],
                    [
                        -12.557626,
                        -14.561143,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/319489-87-7.png \' alt="319489-87-7" height="250" width="250">',
                    ],
                    [
                        -12.337347,
                        -31.849083,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/133463-88-4.png \' alt="133463-88-4" height="250" width="250">',
                    ],
                    [
                        -0.37082502,
                        -20.257933,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757084-47-0.png \' alt="2757084-47-0" height="250" width="250">',
                    ],
                    [
                        -0.09888592,
                        -23.691181,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-85-0.png \' alt="2757082-85-0" height="250" width="250">',
                    ],
                    [
                        -8.935713,
                        -17.009634,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1199225-38-1.png \' alt="1199225-38-1" height="250" width="250">',
                    ],
                    [
                        -4.1531286,
                        -29.551502,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1361563-41-8.png \' alt="1361563-41-8" height="250" width="250">',
                    ],
                    [
                        -16.023668,
                        -15.23709,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-55-9.png \' alt="2634687-55-9" height="250" width="250">',
                    ],
                    [
                        -14.23097,
                        -29.213099,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-25-8.png \' alt="2757082-25-8" height="250" width="250">',
                    ],
                    [
                        -3.208434,
                        -17.395752,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-26-9.png \' alt="2757082-26-9" height="250" width="250">',
                    ],
                    [
                        3.8485155,
                        -15.0872555,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/163165-91-1.png \' alt="163165-91-1" height="250" width="250">',
                    ],
                    [
                        2.8117821,
                        -31.472147,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/148836-24-2.png \' alt="148836-24-2" height="250" width="250">',
                    ],
                    [
                        2.0518353,
                        -20.129995,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-64-0.png \' alt="2634687-64-0" height="250" width="250">',
                    ],
                    [
                        -16.997492,
                        -17.144306,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1489257-33-1.png \' alt="1489257-33-1" height="250" width="250">',
                    ],
                    [
                        -7.9629693,
                        -20.94808,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-34-9.png \' alt="2757082-34-9" height="250" width="250">',
                    ],
                    [
                        -1.0559063,
                        -12.587405,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1306747-75-0.png \' alt="1306747-75-0" height="250" width="250">',
                    ],
                    [
                        9.7068405,
                        -33.03655,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1040274-10-9.png \' alt="1040274-10-9" height="250" width="250">',
                    ],
                    [
                        4.4839296,
                        -12.065784,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/695162-86-8.png \' alt="695162-86-8" height="250" width="250">',
                    ],
                    [
                        0.35511312,
                        -25.81366,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/138429-17-1.png \' alt="138429-17-1" height="250" width="250">',
                    ],
                    [
                        -13.344653,
                        -17.701477,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2247206-06-8.png \' alt="2247206-06-8" height="250" width="250">',
                    ],
                    [
                        -10.973168,
                        -12.67321,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/157825-96-2.png \' alt="157825-96-2" height="250" width="250">',
                    ],
                    [
                        -10.017457,
                        -18.596693,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/444575-98-8.png \' alt="444575-98-8" height="250" width="250">',
                    ],
                    [
                        7.23659,
                        -15.132503,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828431-95-2.png \' alt="2828431-95-2" height="250" width="250">',
                    ],
                    [
                        -3.332449,
                        -34.545197,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-51-0.png \' alt="2757082-51-0" height="250" width="250">',
                    ],
                    [
                        -1.94848,
                        -32.593243,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-01-3.png \' alt="2757083-01-3" height="250" width="250">',
                    ],
                    [
                        4.662935,
                        -14.0826435,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/64691-33-4.png \' alt="64691-33-4" height="250" width="250">',
                    ],
                    [
                        -15.433065,
                        -17.224176,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757085-41-7.png \' alt="2757085-41-7" height="250" width="250">',
                    ],
                    [
                        6.6447062,
                        -12.340902,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2829282-12-2.png \' alt="2829282-12-2" height="250" width="250">',
                    ],
                    [
                        -4.1783185,
                        -31.142517,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/642491-11-0.png \' alt="642491-11-0" height="250" width="250">',
                    ],
                    [
                        5.4261794,
                        -21.153652,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-72-0.png \' alt="2634687-72-0" height="250" width="250">',
                    ],
                    [
                        -0.97304463,
                        -25.452118,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/336884-31-2.png \' alt="336884-31-2" height="250" width="250">',
                    ],
                    [
                        -0.5264495,
                        -33.271496,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/265127-65-9.png \' alt="265127-65-9" height="250" width="250">',
                    ],
                    [
                        0.2786717,
                        -28.830635,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757084-44-7.png \' alt="2757084-44-7" height="250" width="250">',
                    ],
                    [
                        -9.574169,
                        -14.266699,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2172801-78-2.png \' alt="2172801-78-2" height="250" width="250">',
                    ],
                    [
                        1.1432321,
                        -24.527172,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-87-7.png \' alt="2634687-87-7" height="250" width="250">',
                    ],
                    [
                        3.7588596,
                        -35.53683,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-86-6.png \' alt="2634687-86-6" height="250" width="250">',
                    ],
                    [
                        7.3550525,
                        -34.03488,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-72-8.png \' alt="2757083-72-8" height="250" width="250">',
                    ],
                    [
                        -5.460023,
                        -28.666025,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828432-05-7.png \' alt="2828432-05-7" height="250" width="250">',
                    ],
                    [
                        2.3629541,
                        -27.74757,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/700381-43-7.png \' alt="700381-43-7" height="250" width="250">',
                    ],
                    [
                        -13.538539,
                        -19.168259,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2447575-76-8.png \' alt="2447575-76-8" height="250" width="250">',
                    ],
                    [
                        0.29788506,
                        -36.13648,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/150699-10-8.png \' alt="150699-10-8" height="250" width="250">',
                    ],
                    [
                        7.3635826,
                        -25.348022,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757084-50-5.png \' alt="2757084-50-5" height="250" width="250">',
                    ],
                    [
                        -14.306801,
                        -26.817787,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/141362-77-8.png \' alt="141362-77-8" height="250" width="250">',
                    ],
                    [
                        -4.5159216,
                        -15.943014,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-06-5.png \' alt="2757082-06-5" height="250" width="250">',
                    ],
                    [
                        5.7258277,
                        -29.511938,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/167693-62-1.png \' alt="167693-62-1" height="250" width="250">',
                    ],
                    [
                        -4.3696404,
                        -25.995222,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/132098-58-9.png \' alt="132098-58-9" height="250" width="250">',
                    ],
                    [
                        -1.131154,
                        -31.160091,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1315612-04-4.png \' alt="1315612-04-4" height="250" width="250">',
                    ],
                    [
                        -8.62805,
                        -27.510368,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1646862-39-6.png \' alt="1646862-39-6" height="250" width="250">',
                    ],
                    [
                        -12.74461,
                        -33.113457,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/149065-75-8.png \' alt="149065-75-8" height="250" width="250">',
                    ],
                    [
                        4.1803446,
                        -25.601393,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2328084-26-8.png \' alt="2328084-26-8" height="250" width="250">',
                    ],
                    [
                        -2.2020106,
                        -32.61304,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/196207-68-8.png \' alt="196207-68-8" height="250" width="250">',
                    ],
                    [
                        -0.87052774,
                        -13.505597,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/165554-94-9.png \' alt="165554-94-9" height="250" width="250">',
                    ],
                    [
                        1.0962261,
                        -35.37682,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/131380-91-1.png \' alt="131380-91-1" height="250" width="250">',
                    ],
                    [
                        -13.438901,
                        -23.194689,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/319489-90-2.png \' alt="319489-90-2" height="250" width="250">',
                    ],
                    [
                        -9.988131,
                        -20.494326,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828432-10-4.png \' alt="2828432-10-4" height="250" width="250">',
                    ],
                    [
                        -4.4679284,
                        -22.469467,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/176650-26-3.png \' alt="176650-26-3" height="250" width="250">',
                    ],
                    [
                        -14.5409565,
                        -15.798957,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2248620-13-3.png \' alt="2248620-13-3" height="250" width="250">',
                    ],
                    [
                        -11.154171,
                        -20.679728,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828432-11-5.png \' alt="2828432-11-5" height="250" width="250">',
                    ],
                    [
                        4.484436,
                        -20.069923,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1246401-48-8.png \' alt="1246401-48-8" height="250" width="250">',
                    ],
                    [
                        -6.978188,
                        -24.489283,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/164976-63-0.png \' alt="164976-63-0" height="250" width="250">',
                    ],
                    [
                        -8.81062,
                        -21.021873,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/944706-09-6.png \' alt="944706-09-6" height="250" width="250">',
                    ],
                    [
                        -5.612953,
                        -24.70578,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/131833-90-4.png \' alt="131833-90-4" height="250" width="250">',
                    ],
                    [
                        -12.560214,
                        -28.315329,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828432-00-2.png \' alt="2828432-00-2" height="250" width="250">',
                    ],
                    [
                        12.519654,
                        -27.304226,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/162213-03-8.png \' alt="162213-03-8" height="250" width="250">',
                    ],
                    [
                        -8.791645,
                        -18.718317,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-36-1.png \' alt="2757082-36-1" height="250" width="250">',
                    ],
                    [
                        -1.8502848,
                        -35.66714,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828444-13-7.png \' alt="2828444-13-7" height="250" width="250">',
                    ],
                    [
                        4.644937,
                        -21.13018,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1819994-24-5.png \' alt="1819994-24-5" height="250" width="250">',
                    ],
                    [
                        -5.098143,
                        -20.646955,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/181708-51-0.png \' alt="181708-51-0" height="250" width="250">',
                    ],
                    [
                        -13.002828,
                        -16.327452,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/150529-93-4.png \' alt="150529-93-4" height="250" width="250">',
                    ],
                    [
                        -3.334912,
                        -18.536789,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-09-8.png \' alt="2757082-09-8" height="250" width="250">',
                    ],
                    [
                        -5.1846404,
                        -14.219416,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-01-0.png \' alt="2757082-01-0" height="250" width="250">',
                    ],
                    [
                        -6.076743,
                        -32.337585,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/784194-02-1.png \' alt="784194-02-1" height="250" width="250">',
                    ],
                    [
                        -15.890897,
                        -12.687132,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2271404-99-8.png \' alt="2271404-99-8" height="250" width="250">',
                    ],
                    [
                        2.7915463,
                        -12.735285,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1423027-73-9.png \' alt="1423027-73-9" height="250" width="250">',
                    ],
                    [
                        10.421718,
                        -36.86884,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2509221-06-9.png \' alt="2509221-06-9" height="250" width="250">',
                    ],
                    [
                        8.777615,
                        -21.401789,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-39-7.png \' alt="2757083-39-7" height="250" width="250">',
                    ],
                    [
                        2.3331516,
                        -15.03285,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1137063-15-0.png \' alt="1137063-15-0" height="250" width="250">',
                    ],
                    [
                        3.935252,
                        -23.83543,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/298693-02-4.png \' alt="298693-02-4" height="250" width="250">',
                    ],
                    [
                        -0.49928805,
                        -33.36597,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/876953-19-4.png \' alt="876953-19-4" height="250" width="250">',
                    ],
                    [
                        7.3493676,
                        -34.918903,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/154132-43-1.png \' alt="154132-43-1" height="250" width="250">',
                    ],
                    [
                        -10.148975,
                        -21.905096,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/160191-66-2.png \' alt="160191-66-2" height="250" width="250">',
                    ],
                    [
                        1.5456489,
                        -21.375507,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-74-2.png \' alt="2634687-74-2" height="250" width="250">',
                    ],
                    [
                        -18.24018,
                        -15.4099655,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2647945-35-3.png \' alt="2647945-35-3" height="250" width="250">',
                    ],
                    [
                        -0.6593733,
                        -26.655928,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2374958-89-9.png \' alt="2374958-89-9" height="250" width="250">',
                    ],
                    [
                        5.134649,
                        -33.974022,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828432-30-8.png \' alt="2828432-30-8" height="250" width="250">',
                    ],
                    [
                        -8.173736,
                        -25.605438,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/132098-59-0.png \' alt="132098-59-0" height="250" width="250">',
                    ],
                    [
                        8.017097,
                        -20.868673,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/568588-45-4.png \' alt="568588-45-4" height="250" width="250">',
                    ],
                    [
                        -6.292908,
                        -25.360346,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-29-2.png \' alt="2757082-29-2" height="250" width="250">',
                    ],
                    [
                        0.014898215,
                        -36.117844,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/135948-04-8.png \' alt="135948-04-8" height="250" width="250">',
                    ],
                    [
                        -11.198757,
                        -30.50443,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1003886-05-2.png \' alt="1003886-05-2" height="250" width="250">',
                    ],
                    [
                        3.1156583,
                        -29.755033,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/180260-73-5.png \' alt="180260-73-5" height="250" width="250">',
                    ],
                    [
                        -8.075023,
                        -33.821857,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1831829-89-0.png \' alt="1831829-89-0" height="250" width="250">',
                    ],
                    [
                        2.3623016,
                        -17.940628,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757084-65-2.png \' alt="2757084-65-2" height="250" width="250">',
                    ],
                    [
                        -4.6204243,
                        -25.588232,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/176650-25-2.png \' alt="176650-25-2" height="250" width="250">',
                    ],
                    [
                        0.9241292,
                        -27.233543,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/148925-97-7.png \' alt="148925-97-7" height="250" width="250">',
                    ],
                    [
                        -5.665026,
                        -34.76679,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-59-3.png \' alt="2634687-59-3" height="250" width="250">',
                    ],
                    [
                        0.04025445,
                        -31.332432,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/131380-85-3.png \' alt="131380-85-3" height="250" width="250">',
                    ],
                    [
                        -9.433361,
                        -25.611187,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/150639-34-2.png \' alt="150639-34-2" height="250" width="250">',
                    ],
                    [
                        -14.939426,
                        -16.389053,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/190791-28-7.png \' alt="190791-28-7" height="250" width="250">',
                    ],
                    [
                        -3.563414,
                        -27.95627,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-36-4.png \' alt="2757083-36-4" height="250" width="250">',
                    ],
                    [
                        2.8431153,
                        -25.209682,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828431-96-3.png \' alt="2828431-96-3" height="250" width="250">',
                    ],
                    [
                        -15.322893,
                        -23.38373,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/698350-53-7.png \' alt="698350-53-7" height="250" width="250">',
                    ],
                    [
                        2.301606,
                        -33.52626,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/409312-96-5.png \' alt="409312-96-5" height="250" width="250">',
                    ],
                    [
                        6.5498104,
                        -33.572056,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-70-6.png \' alt="2757083-70-6" height="250" width="250">',
                    ],
                    [
                        -11.029603,
                        -14.600709,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757084-58-3.png \' alt="2757084-58-3" height="250" width="250">',
                    ],
                    [
                        -15.462752,
                        -22.694588,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-33-8.png \' alt="2757082-33-8" height="250" width="250">',
                    ],
                    [
                        -10.995205,
                        -16.730448,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-81-1.png \' alt="2634687-81-1" height="250" width="250">',
                    ],
                    [
                        -5.8396416,
                        -34.561188,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-66-7.png \' alt="2757082-66-7" height="250" width="250">',
                    ],
                    [
                        1.5068738,
                        -29.721498,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/485394-20-5.png \' alt="485394-20-5" height="250" width="250">',
                    ],
                    [
                        -15.299839,
                        -12.296465,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2185014-88-2.png \' alt="2185014-88-2" height="250" width="250">',
                    ],
                    [
                        -12.88741,
                        -31.558895,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1003886-03-0.png \' alt="1003886-03-0" height="250" width="250">',
                    ],
                    [
                        -1.4214609,
                        -29.463205,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/131380-86-4.png \' alt="131380-86-4" height="250" width="250">',
                    ],
                    [
                        -7.4866056,
                        -17.92902,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/131833-92-6.png \' alt="131833-92-6" height="250" width="250">',
                    ],
                    [
                        -12.10116,
                        -10.7681875,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1246401-51-3.png \' alt="1246401-51-3" height="250" width="250">',
                    ],
                    [
                        -14.303817,
                        -31.562721,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757084-59-4.png \' alt="2757084-59-4" height="250" width="250">',
                    ],
                    [
                        -15.067196,
                        -21.25121,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/176706-98-2.png \' alt="176706-98-2" height="250" width="250">',
                    ],
                    [
                        -6.636312,
                        -25.336973,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1666116-57-9.png \' alt="1666116-57-9" height="250" width="250">',
                    ],
                    [
                        10.747334,
                        -30.41702,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/314020-70-7.png \' alt="314020-70-7" height="250" width="250">',
                    ],
                    [
                        -11.198745,
                        -32.21126,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/148461-13-6.png \' alt="148461-13-6" height="250" width="250">',
                    ],
                    [
                        -1.3787303,
                        -27.852251,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/133463-89-5.png \' alt="133463-89-5" height="250" width="250">',
                    ],
                    [
                        0.8657039,
                        -28.098366,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/131833-89-1.png \' alt="131833-89-1" height="250" width="250">',
                    ],
                    [
                        -6.2784643,
                        -15.435855,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1373357-00-6.png \' alt="1373357-00-6" height="250" width="250">',
                    ],
                    [
                        8.565517,
                        -28.3081,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2368937-52-2.png \' alt="2368937-52-2" height="250" width="250">',
                    ],
                    [
                        -1.5997819,
                        -31.105392,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/265127-64-8.png \' alt="265127-64-8" height="250" width="250">',
                    ],
                    [
                        -4.74058,
                        -13.910742,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-24-7.png \' alt="2757082-24-7" height="250" width="250">',
                    ],
                    [
                        -0.5422587,
                        -19.042635,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757084-53-8.png \' alt="2757084-53-8" height="250" width="250">',
                    ],
                    [
                        1.1776829,
                        -22.198498,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-52-1.png \' alt="2757082-52-1" height="250" width="250">',
                    ],
                    [
                        0.9396067,
                        -12.910684,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/14483-99-9.png \' alt="14483-99-9" height="250" width="250">',
                    ],
                    [
                        -11.790605,
                        -13.919544,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/131457-46-0.png \' alt="131457-46-0" height="250" width="250">',
                    ],
                    [
                        -5.2826343,
                        -18.732937,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/131833-97-1.png \' alt="131833-97-1" height="250" width="250">',
                    ],
                    [
                        -9.140663,
                        -19.589201,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/160191-65-1.png \' alt="160191-65-1" height="250" width="250">',
                    ],
                    [
                        -11.150114,
                        -27.864044,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2005443-99-0.png \' alt="2005443-99-0" height="250" width="250">',
                    ],
                    [
                        4.2156043,
                        -31.840641,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-75-3.png \' alt="2634687-75-3" height="250" width="250">',
                    ],
                    [
                        -2.8490815,
                        -20.668715,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828431-99-6.png \' alt="2828431-99-6" height="250" width="250">',
                    ],
                    [
                        -9.8350935,
                        -20.622238,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828433-46-9.png \' alt="2828433-46-9" height="250" width="250">',
                    ],
                    [
                        -5.9477596,
                        -20.720568,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/280755-86-4.png \' alt="280755-86-4" height="250" width="250">',
                    ],
                    [
                        -2.0320487,
                        -25.677994,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2368835-34-9.png \' alt="2368835-34-9" height="250" width="250">',
                    ],
                    [
                        6.8826327,
                        -18.123491,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1370549-65-7.png \' alt="1370549-65-7" height="250" width="250">',
                    ],
                    [
                        -4.9612923,
                        -12.491769,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-27-0.png \' alt="2757082-27-0" height="250" width="250">',
                    ],
                    [
                        2.031667,
                        -24.541485,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828431-97-4.png \' alt="2828431-97-4" height="250" width="250">',
                    ],
                    [
                        -4.844875,
                        -16.635242,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/298693-04-6.png \' alt="298693-04-6" height="250" width="250">',
                    ],
                    [
                        -5.072854,
                        -33.999626,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2070868-78-7.png \' alt="2070868-78-7" height="250" width="250">',
                    ],
                    [
                        -12.577312,
                        -12.881953,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1639791-77-7.png \' alt="1639791-77-7" height="250" width="250">',
                    ],
                    [
                        -7.4154177,
                        -12.757661,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-32-7.png \' alt="2757082-32-7" height="250" width="250">',
                    ],
                    [
                        -6.709455,
                        -26.395468,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/131833-91-5.png \' alt="131833-91-5" height="250" width="250">',
                    ],
                    [
                        -11.923866,
                        -29.211712,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/141362-76-7.png \' alt="141362-76-7" height="250" width="250">',
                    ],
                    [
                        1.722065,
                        -12.8387375,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/36697-72-0.png \' alt="36697-72-0" height="250" width="250">',
                    ],
                    [
                        -5.6898994,
                        -30.474771,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-50-9.png \' alt="2757082-50-9" height="250" width="250">',
                    ],
                    [
                        7.4430947,
                        -31.564821,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/164858-78-0.png \' alt="164858-78-0" height="250" width="250">',
                    ],
                    [
                        0.7497433,
                        -14.1082735,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1040274-18-7.png \' alt="1040274-18-7" height="250" width="250">',
                    ],
                    [
                        -12.074169,
                        -26.121681,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/583058-02-0.png \' alt="583058-02-0" height="250" width="250">',
                    ],
                    [
                        -2.6093543,
                        -11.292571,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2351219-90-2.png \' alt="2351219-90-2" height="250" width="250">',
                    ],
                    [
                        2.731275,
                        -27.136414,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-38-6.png \' alt="2757083-38-6" height="250" width="250">',
                    ],
                    [
                        -9.937765,
                        -11.863735,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2582969-66-0.png \' alt="2582969-66-0" height="250" width="250">',
                    ],
                    [
                        -10.263546,
                        -29.218184,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-40-0.png \' alt="2757083-40-0" height="250" width="250">',
                    ],
                    [
                        1.2221392,
                        -35.876556,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1045894-43-6.png \' alt="1045894-43-6" height="250" width="250">',
                    ],
                    [
                        -6.044515,
                        -20.76033,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/150529-94-5.png \' alt="150529-94-5" height="250" width="250">',
                    ],
                    [
                        0.6863138,
                        -31.604376,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1086138-48-8.png \' alt="1086138-48-8" height="250" width="250">',
                    ],
                    [
                        -1.3470367,
                        -24.128862,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828431-98-5.png \' alt="2828431-98-5" height="250" width="250">',
                    ],
                    [
                        3.9266155,
                        -22.91108,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/195379-09-0.png \' alt="195379-09-0" height="250" width="250">',
                    ],
                    [
                        -3.0274563,
                        -21.163616,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1379452-53-5.png \' alt="1379452-53-5" height="250" width="250">',
                    ],
                    [
                        -7.4931417,
                        -19.317816,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/458563-75-2.png \' alt="458563-75-2" height="250" width="250">',
                    ],
                    [
                        -0.035716154,
                        -17.63157,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757084-46-9.png \' alt="2757084-46-9" height="250" width="250">',
                    ],
                    [
                        5.6890464,
                        -30.424124,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/148461-14-7.png \' alt="148461-14-7" height="250" width="250">',
                    ],
                    [
                        -13.1474085,
                        -20.74525,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828433-47-0.png \' alt="2828433-47-0" height="250" width="250">',
                    ],
                    [
                        15.035244,
                        -28.83325,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/828918-24-7.png \' alt="828918-24-7" height="250" width="250">',
                    ],
                    [
                        -15.50104,
                        -22.366138,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-30-5.png \' alt="2757082-30-5" height="250" width="250">',
                    ],
                    [
                        -8.600057,
                        -22.503859,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2452222-13-6.png \' alt="2452222-13-6" height="250" width="250">',
                    ],
                    [
                        -8.667326,
                        -33.193043,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757085-43-9.png \' alt="2757085-43-9" height="250" width="250">',
                    ],
                    [
                        -15.551279,
                        -26.09994,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-70-8.png \' alt="2634687-70-8" height="250" width="250">',
                    ],
                    [
                        -1.5279186,
                        -22.005913,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828432-03-5.png \' alt="2828432-03-5" height="250" width="250">',
                    ],
                    [
                        -7.7564306,
                        -34.1917,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-84-9.png \' alt="2757082-84-9" height="250" width="250">',
                    ],
                    [
                        -2.9633214,
                        -16.868458,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-02-1.png \' alt="2757082-02-1" height="250" width="250">',
                    ],
                    [
                        -10.751404,
                        -24.146507,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828432-27-3.png \' alt="2828432-27-3" height="250" width="250">',
                    ],
                    [
                        -15.012648,
                        -18.853947,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-35-0.png \' alt="2757082-35-0" height="250" width="250">',
                    ],
                    [
                        -7.4677324,
                        -29.500471,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-78-6.png \' alt="2634687-78-6" height="250" width="250">',
                    ],
                    [
                        5.2157264,
                        -27.728912,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-14-8.png \' alt="2757083-14-8" height="250" width="250">',
                    ],
                    [
                        -4.28054,
                        -32.865955,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1092491-37-6.png \' alt="1092491-37-6" height="250" width="250">',
                    ],
                    [
                        -14.122982,
                        -14.429031,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1428328-51-1.png \' alt="1428328-51-1" height="250" width="250">',
                    ],
                ],
                label: {
                    show: false,
                    margin: 8,
                },
            },
            {
                type: "scatter",
                name: "class-7",
                symbolSize: 10,
                data: [
                    [
                        13.302896,
                        18.605402,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1091606-68-6.png \' alt="1091606-68-6" height="250" width="250">',
                    ],
                    [
                        9.73771,
                        19.105263,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/78603-91-5.png \' alt="78603-91-5" height="250" width="250">',
                    ],
                    [
                        15.343368,
                        25.905937,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/852212-99-8.png \' alt="852212-99-8" height="250" width="250">',
                    ],
                    [
                        8.082873,
                        7.439474,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/163726-72-5.png \' alt="163726-72-5" height="250" width="250">',
                    ],
                    [
                        -0.18604897,
                        12.710706,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/53152-69-5.png \' alt="53152-69-5" height="250" width="250">',
                    ],
                    [
                        15.487613,
                        15.592172,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1366384-12-4.png \' alt="1366384-12-4" height="250" width="250">',
                    ],
                    [
                        15.151147,
                        17.023432,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/146476-37-1.png \' alt="146476-37-1" height="250" width="250">',
                    ],
                    [
                        2.8668156,
                        17.96763,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-78-9.png \' alt="2565792-78-9" height="250" width="250">',
                    ],
                    [
                        -3.434266,
                        16.848186,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1211565-07-9.png \' alt="1211565-07-9" height="250" width="250">',
                    ],
                    [
                        9.595429,
                        12.579114,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/919338-66-2.png \' alt="919338-66-2" height="250" width="250">',
                    ],
                    [
                        2.2715611,
                        11.285883,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2241598-32-1.png \' alt="2241598-32-1" height="250" width="250">',
                    ],
                    [
                        8.144215,
                        27.439404,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/313342-22-2.png \' alt="313342-22-2" height="250" width="250">',
                    ],
                    [
                        13.403609,
                        13.04233,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/77876-39-2.png \' alt="77876-39-2" height="250" width="250">',
                    ],
                    [
                        12.672408,
                        29.385946,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/170709-41-8.png \' alt="170709-41-8" height="250" width="250">',
                    ],
                    [
                        7.4340224,
                        16.53203,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1223105-89-2.png \' alt="1223105-89-2" height="250" width="250">',
                    ],
                    [
                        12.932951,
                        11.496803,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/142494-67-5.png \' alt="142494-67-5" height="250" width="250">',
                    ],
                    [
                        14.306641,
                        12.577263,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/67884-33-7.png \' alt="67884-33-7" height="250" width="250">',
                    ],
                    [
                        15.651074,
                        3.8648894,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1087345-30-9.png \' alt="1087345-30-9" height="250" width="250">',
                    ],
                    [
                        10.668836,
                        21.924856,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/852212-90-9.png \' alt="852212-90-9" height="250" width="250">',
                    ],
                    [
                        14.335431,
                        6.494003,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/791616-55-2.png \' alt="791616-55-2" height="250" width="250">',
                    ],
                    [
                        -1.0520114,
                        16.446762,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/352655-40-4.png \' alt="352655-40-4" height="250" width="250">',
                    ],
                    [
                        8.205241,
                        13.5144615,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/220665-47-4.png \' alt="220665-47-4" height="250" width="250">',
                    ],
                    [
                        10.459157,
                        26.585398,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/410096-73-0.png \' alt="410096-73-0" height="250" width="250">',
                    ],
                    [
                        5.369442,
                        23.8437,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/877395-58-9.png \' alt="877395-58-9" height="250" width="250">',
                    ],
                    [
                        9.218344,
                        10.7288065,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/72345-23-4.png \' alt="72345-23-4" height="250" width="250">',
                    ],
                    [
                        3.4615362,
                        12.144845,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-30-3.png \' alt="2565792-30-3" height="250" width="250">',
                    ],
                    [
                        7.057828,
                        7.220074,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/93379-48-7.png \' alt="93379-48-7" height="250" width="250">',
                    ],
                    [
                        15.588435,
                        13.826855,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-11-5.png \' alt="2757083-11-5" height="250" width="250">',
                    ],
                    [
                        2.1008546,
                        20.038454,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2561513-54-8.png \' alt="2561513-54-8" height="250" width="250">',
                    ],
                    [
                        16.258972,
                        23.243973,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2417456-70-1.png \' alt="2417456-70-1" height="250" width="250">',
                    ],
                    [
                        6.9366274,
                        22.08027,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/143668-57-9.png \' alt="143668-57-9" height="250" width="250">',
                    ],
                    [
                        20.338385,
                        18.87583,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1212946-34-3.png \' alt="1212946-34-3" height="250" width="250">',
                    ],
                    [
                        5.7128067,
                        14.359912,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-40-5.png \' alt="2565792-40-5" height="250" width="250">',
                    ],
                    [
                        -2.689101,
                        15.203415,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/67198-26-9.png \' alt="67198-26-9" height="250" width="250">',
                    ],
                    [
                        6.200023,
                        18.06372,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1595319-89-3.png \' alt="1595319-89-3" height="250" width="250">',
                    ],
                    [
                        17.816578,
                        19.264563,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2011787-22-5.png \' alt="2011787-22-5" height="250" width="250">',
                    ],
                    [
                        14.19512,
                        8.602697,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/871945-77-6.png \' alt="871945-77-6" height="250" width="250">',
                    ],
                    [
                        3.9377222,
                        17.653513,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-25-6.png \' alt="2565792-25-6" height="250" width="250">',
                    ],
                    [
                        13.650872,
                        22.701525,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/247923-41-7.png \' alt="247923-41-7" height="250" width="250">',
                    ],
                    [
                        8.989219,
                        23.90267,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/167316-28-1.png \' alt="167316-28-1" height="250" width="250">',
                    ],
                    [
                        9.386708,
                        25.541077,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/852212-89-6.png \' alt="852212-89-6" height="250" width="250">',
                    ],
                    [
                        15.57905,
                        16.103273,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/286454-86-2.png \' alt="286454-86-2" height="250" width="250">',
                    ],
                    [
                        9.625962,
                        18.45075,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/78603-93-7.png \' alt="78603-93-7" height="250" width="250">',
                    ],
                    [
                        0.35892925,
                        17.903164,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-31-4.png \' alt="2565792-31-4" height="250" width="250">',
                    ],
                    [
                        9.904151,
                        25.973879,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1105576-13-3.png \' alt="1105576-13-3" height="250" width="250">',
                    ],
                    [
                        15.598518,
                        17.575628,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1400149-69-0.png \' alt="1400149-69-0" height="250" width="250">',
                    ],
                    [
                        0.49079373,
                        13.530315,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2241598-33-2.png \' alt="2241598-33-2" height="250" width="250">',
                    ],
                    [
                        12.624114,
                        16.468018,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/191109-49-6.png \' alt="191109-49-6" height="250" width="250">',
                    ],
                    [
                        16.196096,
                        9.788133,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/791616-56-3.png \' alt="791616-56-3" height="250" width="250">',
                    ],
                    [
                        8.53209,
                        10.463509,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/17299-07-9.png \' alt="17299-07-9" height="250" width="250">',
                    ],
                    [
                        12.857424,
                        26.74378,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/121758-19-8.png \' alt="121758-19-8" height="250" width="250">',
                    ],
                    [
                        12.114954,
                        13.466911,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/64896-28-2.png \' alt="64896-28-2" height="250" width="250">',
                    ],
                    [
                        9.982877,
                        14.411269,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/157242-43-8.png \' alt="157242-43-8" height="250" width="250">',
                    ],
                    [
                        12.171212,
                        3.4585025,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757287-30-0.png \' alt="2757287-30-0" height="250" width="250">',
                    ],
                    [
                        10.803215,
                        13.32444,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/74839-84-2.png \' alt="74839-84-2" height="250" width="250">',
                    ],
                    [
                        0.5143217,
                        21.894278,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1384619-23-1.png \' alt="1384619-23-1" height="250" width="250">',
                    ],
                    [
                        7.1758685,
                        9.982463,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757287-28-6.png \' alt="2757287-28-6" height="250" width="250">',
                    ],
                    [
                        4.4559507,
                        14.8462305,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/919778-41-9.png \' alt="919778-41-9" height="250" width="250">',
                    ],
                    [
                        12.218312,
                        22.261494,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/603996-85-6.png \' alt="603996-85-6" height="250" width="250">',
                    ],
                    [
                        4.7304993,
                        13.054586,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-12-6.png \' alt="2757083-12-6" height="250" width="250">',
                    ],
                    [
                        16.522831,
                        5.6440926,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/840504-21-4.png \' alt="840504-21-4" height="250" width="250">',
                    ],
                    [
                        8.261699,
                        17.886963,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1824731-39-6.png \' alt="1824731-39-6" height="250" width="250">',
                    ],
                    [
                        9.2874155,
                        6.1589193,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/852042-07-0.png \' alt="852042-07-0" height="250" width="250">',
                    ],
                    [
                        12.624264,
                        5.743628,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/137365-09-4.png \' alt="137365-09-4" height="250" width="250">',
                    ],
                    [
                        14.5335655,
                        10.87241,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/67884-32-6.png \' alt="67884-32-6" height="250" width="250">',
                    ],
                    [
                        11.015651,
                        19.696394,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/88082-66-0.png \' alt="88082-66-0" height="250" width="250">',
                    ],
                    [
                        2.7322307,
                        13.743068,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-86-9.png \' alt="2565792-86-9" height="250" width="250">',
                    ],
                    [
                        20.167326,
                        15.461925,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/399041-17-9.png \' alt="399041-17-9" height="250" width="250">',
                    ],
                    [
                        13.700746,
                        28.859077,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/167316-27-0.png \' alt="167316-27-0" height="250" width="250">',
                    ],
                    [
                        9.601407,
                        20.431269,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/108998-83-0.png \' alt="108998-83-0" height="250" width="250">',
                    ],
                    [
                        7.1385427,
                        25.143991,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/121788-77-0.png \' alt="121788-77-0" height="250" width="250">',
                    ],
                    [
                        -1.7253144,
                        18.01883,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1020665-73-9.png \' alt="1020665-73-9" height="250" width="250">',
                    ],
                    [
                        -2.225777,
                        15.97849,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1067631-36-0.png \' alt="1067631-36-0" height="250" width="250">',
                    ],
                    [
                        20.28321,
                        18.460625,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/874945-80-9.png \' alt="874945-80-9" height="250" width="250">',
                    ],
                    [
                        18.412703,
                        13.181383,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/235104-43-5.png \' alt="235104-43-5" height="250" width="250">',
                    ],
                    [
                        15.566202,
                        18.285864,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/141096-35-7.png \' alt="141096-35-7" height="250" width="250">',
                    ],
                    [
                        15.728371,
                        27.840937,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/887924-07-4.png \' alt="887924-07-4" height="250" width="250">',
                    ],
                    [
                        13.348193,
                        9.222126,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1213667-87-8.png \' alt="1213667-87-8" height="250" width="250">',
                    ],
                    [
                        10.651101,
                        17.436615,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/799297-44-2.png \' alt="799297-44-2" height="250" width="250">',
                    ],
                    [
                        13.772438,
                        15.356927,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2394923-81-8.png \' alt="2394923-81-8" height="250" width="250">',
                    ],
                    [
                        4.5913763,
                        26.812357,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/144119-12-0.png \' alt="144119-12-0" height="250" width="250">',
                    ],
                    [
                        11.37453,
                        11.876437,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/911415-22-0.png \' alt="911415-22-0" height="250" width="250">',
                    ],
                    [
                        18.332048,
                        25.150345,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/166764-19-8.png \' alt="166764-19-8" height="250" width="250">',
                    ],
                    [
                        13.611327,
                        20.481747,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1091606-67-5.png \' alt="1091606-67-5" height="250" width="250">',
                    ],
                    [
                        -0.19841154,
                        14.881695,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-61-0.png \' alt="2565792-61-0" height="250" width="250">',
                    ],
                    [
                        12.034494,
                        15.162068,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/96183-46-9.png \' alt="96183-46-9" height="250" width="250">',
                    ],
                    [
                        20.886919,
                        8.542093,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/65355-08-0.png \' alt="65355-08-0" height="250" width="250">',
                    ],
                    [
                        7.3975277,
                        12.35333,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/91361-07-8.png \' alt="91361-07-8" height="250" width="250">',
                    ],
                    [
                        10.742763,
                        4.5268354,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-09-1.png \' alt="2757083-09-1" height="250" width="250">',
                    ],
                    [
                        18.265213,
                        5.902268,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/37503-80-3.png \' alt="37503-80-3" height="250" width="250">',
                    ],
                    [
                        2.9912694,
                        23.714338,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/137944-39-9.png \' alt="137944-39-9" height="250" width="250">',
                    ],
                    [
                        11.569898,
                        18.19312,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/29841-69-8.png \' alt="29841-69-8" height="250" width="250">',
                    ],
                    [
                        12.071439,
                        19.974127,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/23190-16-1.png \' alt="23190-16-1" height="250" width="250">',
                    ],
                    [
                        19.623117,
                        14.662324,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/110480-83-6.png \' alt="110480-83-6" height="250" width="250">',
                    ],
                    [
                        11.413935,
                        20.503763,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/23364-44-5.png \' alt="23364-44-5" height="250" width="250">',
                    ],
                    [
                        18.333286,
                        14.840569,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-26-7.png \' alt="2565792-26-7" height="250" width="250">',
                    ],
                    [
                        5.639062,
                        18.32714,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2262535-73-7.png \' alt="2262535-73-7" height="250" width="250">',
                    ],
                    [
                        9.534089,
                        10.325597,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/30608-63-0.png \' alt="30608-63-0" height="250" width="250">',
                    ],
                    [
                        13.14472,
                        19.551495,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/341968-71-6.png \' alt="341968-71-6" height="250" width="250">',
                    ],
                    [
                        18.265707,
                        5.901753,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/37503-79-0.png \' alt="37503-79-0" height="250" width="250">',
                    ],
                    [
                        7.768462,
                        8.81004,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1496637-09-2.png \' alt="1496637-09-2" height="250" width="250">',
                    ],
                    [
                        18.248896,
                        26.163158,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/148369-91-9.png \' alt="148369-91-9" height="250" width="250">',
                    ],
                    [
                        15.236432,
                        20.650877,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/947383-62-2.png \' alt="947383-62-2" height="250" width="250">',
                    ],
                    [
                        -1.9804615,
                        20.326046,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/479423-21-7.png \' alt="479423-21-7" height="250" width="250">',
                    ],
                    [
                        16.327904,
                        21.053484,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/959979-30-7.png \' alt="959979-30-7" height="250" width="250">',
                    ],
                    [
                        4.3182335,
                        14.114381,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-66-5.png \' alt="2565792-66-5" height="250" width="250">',
                    ],
                    [
                        10.320756,
                        10.548373,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/129705-30-2.png \' alt="129705-30-2" height="250" width="250">',
                    ],
                    [
                        2.1892195,
                        27.941956,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1088705-53-6.png \' alt="1088705-53-6" height="250" width="250">',
                    ],
                    [
                        -1.6898096,
                        13.890726,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/840454-58-2.png \' alt="840454-58-2" height="250" width="250">',
                    ],
                    [
                        3.7112818,
                        10.535523,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1595319-99-5.png \' alt="1595319-99-5" height="250" width="250">',
                    ],
                    [
                        0.43751204,
                        25.050644,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1233369-41-9.png \' alt="1233369-41-9" height="250" width="250">',
                    ],
                    [
                        2.989708,
                        23.733465,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/205873-26-3.png \' alt="205873-26-3" height="250" width="250">',
                    ],
                    [
                        11.032981,
                        24.348106,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/852212-92-1.png \' alt="852212-92-1" height="250" width="250">',
                    ],
                    [
                        4.933105,
                        28.132261,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2016814-98-3.png \' alt="2016814-98-3" height="250" width="250">',
                    ],
                    [
                        17.051332,
                        25.957989,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/758691-50-8.png \' alt="758691-50-8" height="250" width="250">',
                    ],
                    [
                        8.926004,
                        11.595556,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/24347-58-8.png \' alt="24347-58-8" height="250" width="250">',
                    ],
                    [
                        -2.6909096,
                        15.20412,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/79150-46-2.png \' alt="79150-46-2" height="250" width="250">',
                    ],
                    [
                        4.3672457,
                        16.12022,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/138517-62-1.png \' alt="138517-62-1" height="250" width="250">',
                    ],
                    [
                        9.772611,
                        7.893597,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1459709-16-0.png \' alt="1459709-16-0" height="250" width="250">',
                    ],
                    [
                        17.30684,
                        16.531466,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1936438-30-0.png \' alt="1936438-30-0" height="250" width="250">',
                    ],
                    [
                        6.996564,
                        18.643444,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1595319-95-1.png \' alt="1595319-95-1" height="250" width="250">',
                    ],
                    [
                        6.1738014,
                        8.939977,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/217648-59-4.png \' alt="217648-59-4" height="250" width="250">',
                    ],
                    [
                        11.772166,
                        19.521955,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/23190-17-2.png \' alt="23190-17-2" height="250" width="250">',
                    ],
                    [
                        11.560627,
                        23.432907,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/300345-76-0.png \' alt="300345-76-0" height="250" width="250">',
                    ],
                    [
                        11.73358,
                        10.2524185,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/551950-92-6.png \' alt="551950-92-6" height="250" width="250">',
                    ],
                    [
                        16.825405,
                        26.316277,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/58520-04-0.png \' alt="58520-04-0" height="250" width="250">',
                    ],
                    [
                        13.861633,
                        4.4089108,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/185913-98-8.png \' alt="185913-98-8" height="250" width="250">',
                    ],
                    [
                        18.692204,
                        17.734701,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1213581-06-6.png \' alt="1213581-06-6" height="250" width="250">',
                    ],
                    [
                        8.479496,
                        25.453691,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/121788-73-6.png \' alt="121788-73-6" height="250" width="250">',
                    ],
                    [
                        13.700746,
                        28.859077,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/300345-91-9.png \' alt="300345-91-9" height="250" width="250">',
                    ],
                    [
                        14.786107,
                        18.535995,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1103533-85-2.png \' alt="1103533-85-2" height="250" width="250">',
                    ],
                    [
                        12.199958,
                        7.53816,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1048692-60-9.png \' alt="1048692-60-9" height="250" width="250">',
                    ],
                    [
                        5.386221,
                        9.957197,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2828439-65-0.png \' alt="2828439-65-0" height="250" width="250">',
                    ],
                    [
                        5.25973,
                        11.327223,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1365531-94-7.png \' alt="1365531-94-7" height="250" width="250">',
                    ],
                    [
                        8.257326,
                        27.374844,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1020665-67-1.png \' alt="1020665-67-1" height="250" width="250">',
                    ],
                    [
                        19.36462,
                        14.587825,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/110480-82-5.png \' alt="110480-82-5" height="250" width="250">',
                    ],
                    [
                        4.5943584,
                        21.548325,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2544382-35-4.png \' alt="2544382-35-4" height="250" width="250">',
                    ],
                    [
                        16.80407,
                        11.612793,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1268169-10-3.png \' alt="1268169-10-3" height="250" width="250">',
                    ],
                    [
                        1.689215,
                        12.646219,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-44-9.png \' alt="2565792-44-9" height="250" width="250">',
                    ],
                    [
                        19.770844,
                        11.042501,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/871130-18-6.png \' alt="871130-18-6" height="250" width="250">',
                    ],
                    [
                        12.567487,
                        17.2653,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1212967-57-1.png \' alt="1212967-57-1" height="250" width="250">',
                    ],
                    [
                        7.5749164,
                        20.359863,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/192057-60-6.png \' alt="192057-60-6" height="250" width="250">',
                    ],
                    [
                        9.727938,
                        11.4311285,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/34338-96-0.png \' alt="34338-96-0" height="250" width="250">',
                    ],
                    [
                        -0.18276565,
                        19.796284,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/868851-48-3.png \' alt="868851-48-3" height="250" width="250">',
                    ],
                    [
                        18.649761,
                        21.609192,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2160535-58-8.png \' alt="2160535-58-8" height="250" width="250">',
                    ],
                    [
                        5.7695265,
                        16.413757,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-23-4.png \' alt="2565792-23-4" height="250" width="250">',
                    ],
                    [
                        8.264278,
                        14.071433,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2640520-10-9.png \' alt="2640520-10-9" height="250" width="250">',
                    ],
                    [
                        6.2306433,
                        12.7828865,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/810667-85-7.png \' alt="810667-85-7" height="250" width="250">',
                    ],
                    [
                        1.7853551,
                        28.307516,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1186602-28-7.png \' alt="1186602-28-7" height="250" width="250">',
                    ],
                    [
                        13.67168,
                        13.504146,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/216019-41-9.png \' alt="216019-41-9" height="250" width="250">',
                    ],
                    [
                        10.75582,
                        15.887278,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/221226-19-3.png \' alt="221226-19-3" height="250" width="250">',
                    ],
                    [
                        -0.18548095,
                        12.711288,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/43148-65-8.png \' alt="43148-65-8" height="250" width="250">',
                    ],
                    [
                        -0.6470991,
                        24.765364,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1982356-24-0.png \' alt="1982356-24-0" height="250" width="250">',
                    ],
                    [
                        9.133422,
                        9.221168,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/129619-37-0.png \' alt="129619-37-0" height="250" width="250">',
                    ],
                    [
                        5.074679,
                        15.131886,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2561513-53-7.png \' alt="2561513-53-7" height="250" width="250">',
                    ],
                    [
                        20.887075,
                        8.542028,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/765278-73-7.png \' alt="765278-73-7" height="250" width="250">',
                    ],
                    [
                        -0.32424673,
                        24.422346,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/834917-24-7.png \' alt="834917-24-7" height="250" width="250">',
                    ],
                    [
                        1.4553279,
                        14.820862,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-24-5.png \' alt="2565792-24-5" height="250" width="250">',
                    ],
                    [
                        18.217686,
                        9.126487,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1365531-98-1.png \' alt="1365531-98-1" height="250" width="250">',
                    ],
                    [
                        20.597488,
                        30.006512,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/910134-30-4.png \' alt="910134-30-4" height="250" width="250">',
                    ],
                    [
                        13.995832,
                        2.465704,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/930784-50-2.png \' alt="930784-50-2" height="250" width="250">',
                    ],
                    [
                        14.210333,
                        17.01819,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1264520-30-0.png \' alt="1264520-30-0" height="250" width="250">',
                    ],
                    [
                        8.664011,
                        11.514391,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/19132-06-0.png \' alt="19132-06-0" height="250" width="250">',
                    ],
                    [
                        16.252024,
                        7.7235293,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/148240-65-7.png \' alt="148240-65-7" height="250" width="250">',
                    ],
                    [
                        6.8334947,
                        15.104507,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1595319-97-3.png \' alt="1595319-97-3" height="250" width="250">',
                    ],
                    [
                        3.3812282,
                        14.986656,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-75-6.png \' alt="2565792-75-6" height="250" width="250">',
                    ],
                    [
                        11.317234,
                        8.861478,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/217648-63-0.png \' alt="217648-63-0" height="250" width="250">',
                    ],
                    [
                        10.862189,
                        6.5292916,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/55739-58-7.png \' alt="55739-58-7" height="250" width="250">',
                    ],
                    [
                        16.854969,
                        26.005074,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/58520-03-9.png \' alt="58520-03-9" height="250" width="250">',
                    ],
                    [
                        12.988556,
                        25.015615,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/144222-34-4.png \' alt="144222-34-4" height="250" width="250">',
                    ],
                    [
                        6.538367,
                        20.367388,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/913196-43-7.png \' alt="913196-43-7" height="250" width="250">',
                    ],
                    [
                        9.361732,
                        16.384315,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-47-2.png \' alt="2565792-47-2" height="250" width="250">',
                    ],
                    [
                        8.224242,
                        15.62345,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/118628-68-5.png \' alt="118628-68-5" height="250" width="250">',
                    ],
                    [
                        8.448971,
                        15.568159,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/70749-06-3.png \' alt="70749-06-3" height="250" width="250">',
                    ],
                    [
                        6.8207607,
                        11.186262,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2640520-13-2.png \' alt="2640520-13-2" height="250" width="250">',
                    ],
                    [
                        21.285374,
                        5.1744285,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/192138-05-9.png \' alt="192138-05-9" height="250" width="250">',
                    ],
                    [
                        1.9836806,
                        20.24253,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-82-5.png \' alt="2565792-82-5" height="250" width="250">',
                    ],
                    [
                        18.99921,
                        6.3674664,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/364796-54-3.png \' alt="364796-54-3" height="250" width="250">',
                    ],
                    [
                        12.491727,
                        17.445564,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/5267-64-1.png \' alt="5267-64-1" height="250" width="250">',
                    ],
                    [
                        11.813208,
                        18.614847,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/35132-20-8.png \' alt="35132-20-8" height="250" width="250">',
                    ],
                    [
                        1.1920128,
                        16.53963,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2241598-30-9.png \' alt="2241598-30-9" height="250" width="250">',
                    ],
                    [
                        20.597488,
                        30.006512,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/352655-61-9.png \' alt="352655-61-9" height="250" width="250">',
                    ],
                    [
                        20.210367,
                        13.502734,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/116204-39-8.png \' alt="116204-39-8" height="250" width="250">',
                    ],
                    [
                        4.4032135,
                        19.791206,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2544383-21-1.png \' alt="2544383-21-1" height="250" width="250">',
                    ],
                    [
                        8.648491,
                        10.476019,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/42075-32-1.png \' alt="42075-32-1" height="250" width="250">',
                    ],
                    [
                        9.151557,
                        22.879593,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/313342-24-4.png \' alt="313342-24-4" height="250" width="250">',
                    ],
                    [
                        9.927935,
                        9.376646,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/136705-66-3.png \' alt="136705-66-3" height="250" width="250">',
                    ],
                    [
                        6.063098,
                        20.675753,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2416748-57-5.png \' alt="2416748-57-5" height="250" width="250">',
                    ],
                    [
                        2.9198484,
                        16.186789,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2253984-99-3.png \' alt="2253984-99-3" height="250" width="250">',
                    ],
                ],
                label: {
                    show: false,
                    margin: 8,
                },
            },
            {
                type: "scatter",
                name: "class-8",
                symbolSize: 10,
                data: [
                    [
                        -10.109243,
                        -49.63168,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/131864-67-0.png \' alt="131864-67-0" height="250" width="250">',
                    ],
                    [
                        -0.44653916,
                        -38.01439,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/148461-16-9.png \' alt="148461-16-9" height="250" width="250">',
                    ],
                    [
                        -7.582055,
                        -38.26721,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-82-7.png \' alt="2757082-82-7" height="250" width="250">',
                    ],
                    [
                        -2.9284098,
                        -41.867428,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-26-2.png \' alt="2757083-26-2" height="250" width="250">',
                    ],
                    [
                        2.1940236,
                        -38.555904,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/164858-79-1.png \' alt="164858-79-1" height="250" width="250">',
                    ],
                    [
                        -4.5405335,
                        -58.301003,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2640520-03-0.png \' alt="2640520-03-0" height="250" width="250">',
                    ],
                    [
                        -14.271594,
                        -48.491478,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/174500-20-0.png \' alt="174500-20-0" height="250" width="250">',
                    ],
                    [
                        -7.47242,
                        -39.260406,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-84-4.png \' alt="2634687-84-4" height="250" width="250">',
                    ],
                    [
                        -8.141852,
                        -49.02346,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/118949-61-4.png \' alt="118949-61-4" height="250" width="250">',
                    ],
                    [
                        -4.8358536,
                        -50.102253,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/238760-00-4.png \' alt="238760-00-4" height="250" width="250">',
                    ],
                    [
                        -9.6931305,
                        -39.545937,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/153880-57-0.png \' alt="153880-57-0" height="250" width="250">',
                    ],
                    [
                        -19.151365,
                        -58.77133,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-88-3.png \' alt="2757082-88-3" height="250" width="250">',
                    ],
                    [
                        -10.0521345,
                        -46.74598,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/335357-38-5.png \' alt="335357-38-5" height="250" width="250">',
                    ],
                    [
                        -2.1372867,
                        -50.70727,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2375437-25-3.png \' alt="2375437-25-3" height="250" width="250">',
                    ],
                    [
                        4.0515575,
                        -51.473446,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-62-8.png \' alt="2634687-62-8" height="250" width="250">',
                    ],
                    [
                        10.726365,
                        -43.159798,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1562372-40-0.png \' alt="1562372-40-0" height="250" width="250">',
                    ],
                    [
                        -12.122064,
                        -55.804478,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/151670-69-8.png \' alt="151670-69-8" height="250" width="250">',
                    ],
                    [
                        -20.255306,
                        -56.500393,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-89-4.png \' alt="2757082-89-4" height="250" width="250">',
                    ],
                    [
                        -13.147817,
                        -53.96316,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/365215-38-9.png \' alt="365215-38-9" height="250" width="250">',
                    ],
                    [
                        -5.0904613,
                        -43.850483,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-30-8.png \' alt="2757083-30-8" height="250" width="250">',
                    ],
                    [
                        7.5034003,
                        -44.64883,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/226387-11-7.png \' alt="226387-11-7" height="250" width="250">',
                    ],
                    [
                        -7.1903677,
                        -38.741383,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/108915-03-3.png \' alt="108915-03-3" height="250" width="250">',
                    ],
                    [
                        -8.174183,
                        -55.274612,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1308311-03-6.png \' alt="1308311-03-6" height="250" width="250">',
                    ],
                    [
                        -3.0583158,
                        -45.509174,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1803416-29-6.png \' alt="1803416-29-6" height="250" width="250">',
                    ],
                    [
                        6.740025,
                        -44.897194,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-57-1.png \' alt="2634687-57-1" height="250" width="250">',
                    ],
                    [
                        -8.178855,
                        -55.408703,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/199277-73-1.png \' alt="199277-73-1" height="250" width="250">',
                    ],
                    [
                        2.4735167,
                        -45.973053,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/485394-21-6.png \' alt="485394-21-6" height="250" width="250">',
                    ],
                    [
                        5.440781,
                        -39.63505,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2242702-44-7.png \' alt="2242702-44-7" height="250" width="250">',
                    ],
                    [
                        -8.619256,
                        -41.558273,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-54-6.png \' alt="2757083-54-6" height="250" width="250">',
                    ],
                    [
                        -6.384338,
                        -39.309013,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/108915-04-4.png \' alt="108915-04-4" height="250" width="250">',
                    ],
                    [
                        -9.966169,
                        -56.188564,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/199277-77-5.png \' alt="199277-77-5" height="250" width="250">',
                    ],
                    [
                        -2.3435826,
                        -43.331123,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1416819-91-4.png \' alt="1416819-91-4" height="250" width="250">',
                    ],
                    [
                        4.990472,
                        -52.494473,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-69-0.png \' alt="2757082-69-0" height="250" width="250">',
                    ],
                    [
                        -11.370366,
                        -40.489853,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/553663-64-2.png \' alt="553663-64-2" height="250" width="250">',
                    ],
                    [
                        -11.42582,
                        -48.606293,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2471850-55-0.png \' alt="2471850-55-0" height="250" width="250">',
                    ],
                    [
                        -8.78412,
                        -41.620132,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-18-2.png \' alt="2757083-18-2" height="250" width="250">',
                    ],
                    [
                        -11.099199,
                        -38.35119,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1632140-86-3.png \' alt="1632140-86-3" height="250" width="250">',
                    ],
                    [
                        -2.52275,
                        -44.655666,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1803416-28-5.png \' alt="1803416-28-5" height="250" width="250">',
                    ],
                    [
                        -10.051382,
                        -52.992325,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1666123-70-1.png \' alt="1666123-70-1" height="250" width="250">',
                    ],
                    [
                        -3.6050615,
                        -40.388176,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-17-1.png \' alt="2757083-17-1" height="250" width="250">',
                    ],
                    [
                        -6.5493484,
                        -44.47525,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1085431-16-8.png \' alt="1085431-16-8" height="250" width="250">',
                    ],
                    [
                        -4.7415013,
                        -42.199497,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-19-3.png \' alt="2757083-19-3" height="250" width="250">',
                    ],
                    [
                        -3.9176118,
                        -52.110477,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/284483-04-1.png \' alt="284483-04-1" height="250" width="250">',
                    ],
                    [
                        4.939111,
                        -51.537323,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-69-5.png \' alt="2634687-69-5" height="250" width="250">',
                    ],
                    [
                        -5.793666,
                        -51.709614,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2093382-71-7.png \' alt="2093382-71-7" height="250" width="250">',
                    ],
                    [
                        -9.209485,
                        -39.10439,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/117408-99-8.png \' alt="117408-99-8" height="250" width="250">',
                    ],
                    [
                        -15.942944,
                        -37.88123,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/195433-00-2.png \' alt="195433-00-2" height="250" width="250">',
                    ],
                    [
                        -19.659492,
                        -59.97744,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/235742-75-3.png \' alt="235742-75-3" height="250" width="250">',
                    ],
                    [
                        -19.026281,
                        -46.272995,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/220108-54-3.png \' alt="220108-54-3" height="250" width="250">',
                    ],
                    [
                        -2.2278187,
                        -50.767338,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-78-1.png \' alt="2757082-78-1" height="250" width="250">',
                    ],
                    [
                        -7.287408,
                        -37.075787,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/117409-00-4.png \' alt="117409-00-4" height="250" width="250">',
                    ],
                    [
                        4.360454,
                        -51.366703,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-67-8.png \' alt="2757082-67-8" height="250" width="250">',
                    ],
                    [
                        10.908857,
                        -43.08028,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1101906-42-6.png \' alt="1101906-42-6" height="250" width="250">',
                    ],
                    [
                        -19.000147,
                        -45.336643,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1252576-14-9.png \' alt="1252576-14-9" height="250" width="250">',
                    ],
                    [
                        -8.616231,
                        -42.952267,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-28-4.png \' alt="2757083-28-4" height="250" width="250">',
                    ],
                    [
                        -10.27074,
                        -48.68087,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/189014-95-7.png \' alt="189014-95-7" height="250" width="250">',
                    ],
                    [
                        -11.0743475,
                        -53.982903,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-58-7.png \' alt="2757082-58-7" height="250" width="250">',
                    ],
                    [
                        -6.9882684,
                        -48.64912,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1509929-20-7.png \' alt="1509929-20-7" height="250" width="250">',
                    ],
                    [
                        7.4896493,
                        -44.773727,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/933992-49-5.png \' alt="933992-49-5" height="250" width="250">',
                    ],
                    [
                        -13.48578,
                        -38.79374,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-83-8.png \' alt="2757082-83-8" height="250" width="250">',
                    ],
                    [
                        -7.745626,
                        -58.501995,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2417528-06-2.png \' alt="2417528-06-2" height="250" width="250">',
                    ],
                    [
                        -19.613592,
                        -59.918484,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-87-2.png \' alt="2757082-87-2" height="250" width="250">',
                    ],
                    [
                        6.2017117,
                        -37.58016,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1965335-75-4.png \' alt="1965335-75-4" height="250" width="250">',
                    ],
                    [
                        -9.815848,
                        -47.593513,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1658490-50-6.png \' alt="1658490-50-6" height="250" width="250">',
                    ],
                    [
                        -1.2804525,
                        -45.462242,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-42-9.png \' alt="2757082-42-9" height="250" width="250">',
                    ],
                    [
                        -20.24761,
                        -59.50073,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-56-0.png \' alt="2634687-56-0" height="250" width="250">',
                    ],
                    [
                        -10.283262,
                        -48.676544,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/256377-24-9.png \' alt="256377-24-9" height="250" width="250">',
                    ],
                    [
                        -11.014339,
                        -54.389374,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-45-2.png \' alt="2757082-45-2" height="250" width="250">',
                    ],
                    [
                        -19.904215,
                        -57.72447,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-40-7.png \' alt="2757082-40-7" height="250" width="250">',
                    ],
                    [
                        -5.9359922,
                        -40.48805,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1632140-88-5.png \' alt="1632140-88-5" height="250" width="250">',
                    ],
                    [
                        -14.306335,
                        -54.238235,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-74-7.png \' alt="2757082-74-7" height="250" width="250">',
                    ],
                    [
                        -14.307863,
                        -52.84722,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-55-4.png \' alt="2757082-55-4" height="250" width="250">',
                    ],
                    [
                        -18.477568,
                        -51.2215,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1027754-31-9.png \' alt="1027754-31-9" height="250" width="250">',
                    ],
                    [
                        -4.8332267,
                        -49.87315,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-75-8.png \' alt="2757082-75-8" height="250" width="250">',
                    ],
                    [
                        -5.76661,
                        -59.73387,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-49-9.png \' alt="2757083-49-9" height="250" width="250">',
                    ],
                    [
                        -8.220141,
                        -47.26162,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/118949-62-5.png \' alt="118949-62-5" height="250" width="250">',
                    ],
                    [
                        -8.451655,
                        -52.302418,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-47-4.png \' alt="2757082-47-4" height="250" width="250">',
                    ],
                    [
                        -14.857347,
                        -43.128605,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1416820-34-2.png \' alt="1416820-34-2" height="250" width="250">',
                    ],
                    [
                        -12.866515,
                        -51.524498,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-70-3.png \' alt="2757082-70-3" height="250" width="250">',
                    ],
                    [
                        4.1559777,
                        -52.76877,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-73-6.png \' alt="2757082-73-6" height="250" width="250">',
                    ],
                    [
                        -1.1802359,
                        -43.06654,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1803416-27-4.png \' alt="1803416-27-4" height="250" width="250">',
                    ],
                    [
                        -13.423129,
                        -38.8689,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-71-9.png \' alt="2634687-71-9" height="250" width="250">',
                    ],
                    [
                        -2.9486244,
                        -37.79693,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1814890-52-2.png \' alt="1814890-52-2" height="250" width="250">',
                    ],
                    [
                        -9.518444,
                        -37.5766,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1108603-35-5.png \' alt="1108603-35-5" height="250" width="250">',
                    ],
                    [
                        -12.9487505,
                        -50.386047,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/128249-70-7.png \' alt="128249-70-7" height="250" width="250">',
                    ],
                    [
                        -9.090095,
                        -42.716858,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-32-0.png \' alt="2757083-32-0" height="250" width="250">',
                    ],
                    [
                        -2.570721,
                        -41.740627,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-20-6.png \' alt="2757083-20-6" height="250" width="250">',
                    ],
                    [
                        -8.005867,
                        -49.121525,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/147409-41-4.png \' alt="147409-41-4" height="250" width="250">',
                    ],
                    [
                        0.010983235,
                        -40.210655,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1006708-91-3.png \' alt="1006708-91-3" height="250" width="250">',
                    ],
                    [
                        -14.325485,
                        -42.660717,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1257527-14-2.png \' alt="1257527-14-2" height="250" width="250">',
                    ],
                    [
                        -9.510386,
                        -55.968273,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-98-5.png \' alt="2757082-98-5" height="250" width="250">',
                    ],
                    [
                        -12.2728815,
                        -36.078224,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-21-7.png \' alt="2757083-21-7" height="250" width="250">',
                    ],
                    [
                        -15.074246,
                        -46.767178,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/180981-81-1.png \' alt="180981-81-1" height="250" width="250">',
                    ],
                    [
                        -6.3709383,
                        -57.715958,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2570984-82-4.png \' alt="2570984-82-4" height="250" width="250">',
                    ],
                    [
                        -9.300606,
                        -51.893776,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-46-3.png \' alt="2757082-46-3" height="250" width="250">',
                    ],
                    [
                        -4.9387727,
                        -57.834194,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-50-2.png \' alt="2757083-50-2" height="250" width="250">',
                    ],
                    [
                        -5.550808,
                        -37.88928,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/117408-98-7.png \' alt="117408-98-7" height="250" width="250">',
                    ],
                    [
                        -8.125931,
                        -37.895443,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/108915-07-7.png \' alt="108915-07-7" height="250" width="250">',
                    ],
                    [
                        -20.156796,
                        -59.42665,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-43-0.png \' alt="2757082-43-0" height="250" width="250">',
                    ],
                    [
                        -3.979479,
                        -36.042423,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/485394-22-7.png \' alt="485394-22-7" height="250" width="250">',
                    ],
                    [
                        8.967503,
                        -38.32048,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/396094-85-2.png \' alt="396094-85-2" height="250" width="250">',
                    ],
                    [
                        -5.7505727,
                        -51.20969,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/118949-63-6.png \' alt="118949-63-6" height="250" width="250">',
                    ],
                    [
                        3.965621,
                        -52.803528,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1772625-41-8.png \' alt="1772625-41-8" height="250" width="250">',
                    ],
                    [
                        -4.914062,
                        -42.29625,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-25-1.png \' alt="2757083-25-1" height="250" width="250">',
                    ],
                    [
                        -5.315485,
                        -55.808216,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2417528-13-1.png \' alt="2417528-13-1" height="250" width="250">',
                    ],
                    [
                        2.7240644,
                        -38.734314,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-58-2.png \' alt="2634687-58-2" height="250" width="250">',
                    ],
                    [
                        -8.028324,
                        -52.310047,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2095304-34-8.png \' alt="2095304-34-8" height="250" width="250">',
                    ],
                    [
                        -6.1437917,
                        -53.88219,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2491654-89-6.png \' alt="2491654-89-6" height="250" width="250">',
                    ],
                    [
                        -14.38419,
                        -48.696857,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/273216-89-0.png \' alt="273216-89-0" height="250" width="250">',
                    ],
                    [
                        -4.44372,
                        -53.902634,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1800190-39-9.png \' alt="1800190-39-9" height="250" width="250">',
                    ],
                    [
                        -3.529994,
                        -40.47869,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2068819-66-7.png \' alt="2068819-66-7" height="250" width="250">',
                    ],
                    [
                        -9.674838,
                        -48.544796,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/131864-68-1.png \' alt="131864-68-1" height="250" width="250">',
                    ],
                    [
                        -11.631543,
                        -47.572197,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1562372-39-7.png \' alt="1562372-39-7" height="250" width="250">',
                    ],
                    [
                        -2.1140656,
                        -41.621487,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-24-0.png \' alt="2757083-24-0" height="250" width="250">',
                    ],
                    [
                        -7.0515447,
                        -57.83503,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2227390-59-0.png \' alt="2227390-59-0" height="250" width="250">',
                    ],
                    [
                        -14.543543,
                        -42.625027,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1416820-33-1.png \' alt="1416820-33-1" height="250" width="250">',
                    ],
                    [
                        -10.719873,
                        -39.618515,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1632140-87-4.png \' alt="1632140-87-4" height="250" width="250">',
                    ],
                    [
                        -10.396814,
                        -52.691616,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/915314-13-5.png \' alt="915314-13-5" height="250" width="250">',
                    ],
                    [
                        -18.494001,
                        -51.22639,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1027754-32-0.png \' alt="1027754-32-0" height="250" width="250">',
                    ],
                    [
                        -19.006931,
                        -45.46005,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/933992-48-4.png \' alt="933992-48-4" height="250" width="250">',
                    ],
                    [
                        -5.772578,
                        -53.69561,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/199277-80-0.png \' alt="199277-80-0" height="250" width="250">',
                    ],
                    [
                        -9.87249,
                        -37.872406,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/108915-08-8.png \' alt="108915-08-8" height="250" width="250">',
                    ],
                    [
                        -3.6122196,
                        -43.28454,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1803416-30-9.png \' alt="1803416-30-9" height="250" width="250">',
                    ],
                    [
                        -5.046917,
                        -43.911896,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-23-9.png \' alt="2757083-23-9" height="250" width="250">',
                    ],
                    [
                        -8.414664,
                        -50.914658,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2634687-65-1.png \' alt="2634687-65-1" height="250" width="250">',
                    ],
                    [
                        6.787994,
                        -44.88371,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/226387-12-8.png \' alt="226387-12-8" height="250" width="250">',
                    ],
                    [
                        -6.390584,
                        -38.525368,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/132187-16-7.png \' alt="132187-16-7" height="250" width="250">',
                    ],
                    [
                        -12.418174,
                        -55.85317,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2088982-18-5.png \' alt="2088982-18-5" height="250" width="250">',
                    ],
                    [
                        2.1550617,
                        -42.614243,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/477351-96-5.png \' alt="477351-96-5" height="250" width="250">',
                    ],
                    [
                        -10.342511,
                        -35.387764,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1315612-06-6.png \' alt="1315612-06-6" height="250" width="250">',
                    ],
                    [
                        -11.4614315,
                        -56.884037,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1509929-22-9.png \' alt="1509929-22-9" height="250" width="250">',
                    ],
                    [
                        -5.690684,
                        -37.779587,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/242482-28-6.png \' alt="242482-28-6" height="250" width="250">',
                    ],
                    [
                        -14.743887,
                        -41.90742,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1831829-87-8.png \' alt="1831829-87-8" height="250" width="250">',
                    ],
                    [
                        -6.705215,
                        -37.357796,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/192318-04-0.png \' alt="192318-04-0" height="250" width="250">',
                    ],
                    [
                        -5.688916,
                        -59.86589,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2417528-14-2.png \' alt="2417528-14-2" height="250" width="250">',
                    ],
                    [
                        -11.610908,
                        -52.14618,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1509929-21-8.png \' alt="1509929-21-8" height="250" width="250">',
                    ],
                    [
                        -4.8782997,
                        -41.096493,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-15-9.png \' alt="2757083-15-9" height="250" width="250">',
                    ],
                    [
                        -6.648545,
                        -50.415592,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/185346-17-2.png \' alt="185346-17-2" height="250" width="250">',
                    ],
                    [
                        -10.776554,
                        -50.604763,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-65-6.png \' alt="2757082-65-6" height="250" width="250">',
                    ],
                    [
                        4.9367423,
                        -51.55412,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-56-5.png \' alt="2757082-56-5" height="250" width="250">',
                    ],
                    [
                        -6.8167377,
                        -54.80145,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-00-2.png \' alt="2757083-00-2" height="250" width="250">',
                    ],
                    [
                        -13.019174,
                        -36.070362,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-31-9.png \' alt="2757083-31-9" height="250" width="250">',
                    ],
                    [
                        -7.014104,
                        -43.00936,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-27-3.png \' alt="2757083-27-3" height="250" width="250">',
                    ],
                    [
                        -12.298293,
                        -43.277298,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/944836-22-0.png \' alt="944836-22-0" height="250" width="250">',
                    ],
                    [
                        -3.5660782,
                        -44.11687,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2010973-00-7.png \' alt="2010973-00-7" height="250" width="250">',
                    ],
                    [
                        -7.074939,
                        -42.08935,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757083-16-0.png \' alt="2757083-16-0" height="250" width="250">',
                    ],
                    [
                        -13.275707,
                        -50.37114,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-77-0.png \' alt="2757082-77-0" height="250" width="250">',
                    ],
                    [
                        -2.8126187,
                        -37.872597,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-79-2.png \' alt="2757082-79-2" height="250" width="250">',
                    ],
                    [
                        -1.3313154,
                        -45.052723,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1835671-08-3.png \' alt="1835671-08-3" height="250" width="250">',
                    ],
                    [
                        -6.6766014,
                        -54.765472,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/199277-70-8.png \' alt="199277-70-8" height="250" width="250">',
                    ],
                    [
                        -19.904158,
                        -57.724674,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2757082-39-4.png \' alt="2757082-39-4" height="250" width="250">',
                    ],
                    [
                        -2.2030861,
                        -43.63266,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1428537-19-2.png \' alt="1428537-19-2" height="250" width="250">',
                    ],
                    [
                        -18.910906,
                        -46.290462,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1252576-13-8.png \' alt="1252576-13-8" height="250" width="250">',
                    ],
                ],
                label: {
                    show: false,
                    margin: 8,
                },
            },
            {
                type: "scatter",
                name: "class-9",
                symbolSize: 10,
                data: [
                    [
                        19.154501,
                        37.68685,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1221187-79-6.png \' alt="1221187-79-6" height="250" width="250">',
                    ],
                    [
                        -6.9413533,
                        46.235394,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1221902-06-2.png \' alt="1221902-06-2" height="250" width="250">',
                    ],
                    [
                        18.373692,
                        49.0654,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/522-66-7.png \' alt="522-66-7" height="250" width="250">',
                    ],
                    [
                        3.1061866,
                        45.260143,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/497883-22-4.png \' alt="497883-22-4" height="250" width="250">',
                    ],
                    [
                        10.011246,
                        46.508335,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1256245-79-0.png \' alt="1256245-79-0" height="250" width="250">',
                    ],
                    [
                        16.782063,
                        38.531403,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2115740-02-6.png \' alt="2115740-02-6" height="250" width="250">',
                    ],
                    [
                        -7.6381817,
                        41.547047,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/209482-27-9.png \' alt="209482-27-9" height="250" width="250">',
                    ],
                    [
                        -1.7699075,
                        40.054874,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/913617-04-6.png \' alt="913617-04-6" height="250" width="250">',
                    ],
                    [
                        19.13711,
                        49.205105,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/140924-50-1.png \' alt="140924-50-1" height="250" width="250">',
                    ],
                    [
                        17.851713,
                        49.383846,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1435-55-8.png \' alt="1435-55-8" height="250" width="250">',
                    ],
                    [
                        15.688878,
                        47.91526,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/6591-63-5.png \' alt="6591-63-5" height="250" width="250">',
                    ],
                    [
                        17.087858,
                        44.00334,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1630973-03-3.png \' alt="1630973-03-3" height="250" width="250">',
                    ],
                    [
                        16.595236,
                        46.663776,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/18797-86-9.png \' alt="18797-86-9" height="250" width="250">',
                    ],
                    [
                        21.59413,
                        38.50316,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2495023-56-6.png \' alt="2495023-56-6" height="250" width="250">',
                    ],
                    [
                        -3.9270008,
                        49.878765,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/349103-24-8.png \' alt="349103-24-8" height="250" width="250">',
                    ],
                    [
                        20.368235,
                        38.659172,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2495023-50-0.png \' alt="2495023-50-0" height="250" width="250">',
                    ],
                    [
                        15.496555,
                        36.08288,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1221187-73-0.png \' alt="1221187-73-0" height="250" width="250">',
                    ],
                    [
                        -4.4089723,
                        47.632214,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/256441-54-0.png \' alt="256441-54-0" height="250" width="250">',
                    ],
                    [
                        6.394857,
                        34.880142,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/75684-93-4.png \' alt="75684-93-4" height="250" width="250">',
                    ],
                    [
                        20.477472,
                        48.527786,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/852913-19-0.png \' alt="852913-19-0" height="250" width="250">',
                    ],
                    [
                        16.154213,
                        36.66289,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2387667-03-8.png \' alt="2387667-03-8" height="250" width="250">',
                    ],
                    [
                        -2.2383556,
                        49.629543,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1894191-97-9.png \' alt="1894191-97-9" height="250" width="250">',
                    ],
                    [
                        6.394632,
                        34.8801,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/102490-05-1.png \' alt="102490-05-1" height="250" width="250">',
                    ],
                    [
                        14.960641,
                        46.967297,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/6119-70-6.png \' alt="6119-70-6" height="250" width="250">',
                    ],
                    [
                        -6.9413533,
                        46.235394,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/490023-37-5.png \' alt="490023-37-5" height="250" width="250">',
                    ],
                    [
                        -3.9270008,
                        49.878765,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/252288-04-3.png \' alt="252288-04-3" height="250" width="250">',
                    ],
                    [
                        13.139818,
                        34.71003,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1221187-78-5.png \' alt="1221187-78-5" height="250" width="250">',
                    ],
                    [
                        10.715959,
                        41.711754,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/851477-19-5.png \' alt="851477-19-5" height="250" width="250">',
                    ],
                    [
                        15.082269,
                        48.48585,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1052184-48-1.png \' alt="1052184-48-1" height="250" width="250">',
                    ],
                    [
                        19.370815,
                        38.587852,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2495023-46-4.png \' alt="2495023-46-4" height="250" width="250">',
                    ],
                    [
                        -1.5681931,
                        46.427734,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/342813-26-7.png \' alt="342813-26-7" height="250" width="250">',
                    ],
                    [
                        13.34743,
                        48.392136,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/852913-16-7.png \' alt="852913-16-7" height="250" width="250">',
                    ],
                    [
                        0.08643585,
                        39.10256,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/864529-90-8.png \' alt="864529-90-8" height="250" width="250">',
                    ],
                    [
                        -0.641605,
                        39.49046,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/185449-86-9.png \' alt="185449-86-9" height="250" width="250">',
                    ],
                    [
                        -4.409636,
                        47.632942,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/188055-47-2.png \' alt="188055-47-2" height="250" width="250">',
                    ],
                    [
                        15.812282,
                        46.526478,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/130-95-0.png \' alt="130-95-0" height="250" width="250">',
                    ],
                    [
                        14.4728,
                        36.123863,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1221187-86-5.png \' alt="1221187-86-5" height="250" width="250">',
                    ],
                    [
                        13.526814,
                        37.547165,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2495023-53-3.png \' alt="2495023-53-3" height="250" width="250">',
                    ],
                    [
                        9.966195,
                        46.296207,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1256245-82-5.png \' alt="1256245-82-5" height="250" width="250">',
                    ],
                    [
                        14.155643,
                        45.410454,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2271134-66-6.png \' alt="2271134-66-6" height="250" width="250">',
                    ],
                    [
                        -7.9190264,
                        41.80597,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/209482-28-0.png \' alt="209482-28-0" height="250" width="250">',
                    ],
                    [
                        -10.129539,
                        48.00281,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1360145-09-0.png \' alt="1360145-09-0" height="250" width="250">',
                    ],
                    [
                        18.56758,
                        37.252113,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2495023-58-8.png \' alt="2495023-58-8" height="250" width="250">',
                    ],
                    [
                        15.533644,
                        36.073997,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1221187-74-1.png \' alt="1221187-74-1" height="250" width="250">',
                    ],
                    [
                        2.9341645,
                        51.669678,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2093047-92-6.png \' alt="2093047-92-6" height="250" width="250">',
                    ],
                    [
                        19.72949,
                        39.614826,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2495023-51-1.png \' alt="2495023-51-1" height="250" width="250">',
                    ],
                    [
                        12.123504,
                        44.234543,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/118-10-5.png \' alt="118-10-5" height="250" width="250">',
                    ],
                    [
                        9.314024,
                        34.28357,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/215433-53-7.png \' alt="215433-53-7" height="250" width="250">',
                    ],
                    [
                        15.026448,
                        46.96461,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/56-54-2.png \' alt="56-54-2" height="250" width="250">',
                    ],
                    [
                        15.345922,
                        35.028187,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2097438-96-3.png \' alt="2097438-96-3" height="250" width="250">',
                    ],
                    [
                        -7.876318,
                        49.793182,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/636559-55-2.png \' alt="636559-55-2" height="250" width="250">',
                    ],
                    [
                        -3.5619614,
                        52.82044,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/185449-85-8.png \' alt="185449-85-8" height="250" width="250">',
                    ],
                    [
                        -2.2389777,
                        49.62956,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/802902-36-9.png \' alt="802902-36-9" height="250" width="250">',
                    ],
                    [
                        3.1161606,
                        35.807148,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/945852-58-4.png \' alt="945852-58-4" height="250" width="250">',
                    ],
                    [
                        14.678518,
                        37.691677,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2495023-52-2.png \' alt="2495023-52-2" height="250" width="250">',
                    ],
                    [
                        18.857235,
                        39.263214,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2495023-47-5.png \' alt="2495023-47-5" height="250" width="250">',
                    ],
                    [
                        17.772697,
                        51.081306,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/176298-44-5.png \' alt="176298-44-5" height="250" width="250">',
                    ],
                    [
                        -7.876318,
                        49.793182,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/284472-79-3.png \' alt="284472-79-3" height="250" width="250">',
                    ],
                    [
                        7.9615817,
                        31.517174,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/756491-54-0.png \' alt="756491-54-0" height="250" width="250">',
                    ],
                    [
                        20.580795,
                        36.859604,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2495023-48-6.png \' alt="2495023-48-6" height="250" width="250">',
                    ],
                    [
                        0.91025645,
                        55.26208,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/942939-38-0.png \' alt="942939-38-0" height="250" width="250">',
                    ],
                    [
                        -3.8627431,
                        45.54684,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/137156-22-0.png \' alt="137156-22-0" height="250" width="250">',
                    ],
                    [
                        -1.7780968,
                        44.6216,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/850796-15-5.png \' alt="850796-15-5" height="250" width="250">',
                    ],
                    [
                        9.314024,
                        34.28357,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/863659-89-6.png \' alt="863659-89-6" height="250" width="250">',
                    ],
                    [
                        -0.96085614,
                        29.665789,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/93379-49-8.png \' alt="93379-49-8" height="250" width="250">',
                    ],
                    [
                        10.842908,
                        43.644127,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/945985-98-8.png \' alt="945985-98-8" height="250" width="250">',
                    ],
                    [
                        11.811523,
                        43.92912,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/485-71-2.png \' alt="485-71-2" height="250" width="250">',
                    ],
                    [
                        17.393202,
                        46.01737,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1255087-69-4.png \' alt="1255087-69-4" height="250" width="250">',
                    ],
                    [
                        -6.99955,
                        50.852383,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/185449-81-4.png \' alt="185449-81-4" height="250" width="250">',
                    ],
                    [
                        3.1161606,
                        35.807148,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/791616-60-9.png \' alt="791616-60-9" height="250" width="250">',
                    ],
                    [
                        3.1065466,
                        45.25956,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/415918-91-1.png \' alt="415918-91-1" height="250" width="250">',
                    ],
                    [
                        14.621308,
                        44.08195,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2097541-17-6.png \' alt="2097541-17-6" height="250" width="250">',
                    ],
                    [
                        0.91029364,
                        55.26217,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1265884-98-7.png \' alt="1265884-98-7" height="250" width="250">',
                    ],
                    [
                        -2.6855614,
                        46.34884,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/157488-65-8.png \' alt="157488-65-8" height="250" width="250">',
                    ],
                    [
                        -6.2365046,
                        48.566334,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/627528-96-5.png \' alt="627528-96-5" height="250" width="250">',
                    ],
                    [
                        15.0341,
                        33.95107,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2495023-54-4.png \' alt="2495023-54-4" height="250" width="250">',
                    ],
                    [
                        -7.6381817,
                        41.547047,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/380230-02-4.png \' alt="380230-02-4" height="250" width="250">',
                    ],
                    [
                        2.9341645,
                        51.669678,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1361055-01-7.png \' alt="1361055-01-7" height="250" width="250">',
                    ],
                    [
                        4.252097,
                        32.73025,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/220486-43-1.png \' alt="220486-43-1" height="250" width="250">',
                    ],
                    [
                        16.304611,
                        38.232525,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2495023-49-7.png \' alt="2495023-49-7" height="250" width="250">',
                    ],
                    [
                        -1.0885941,
                        33.146,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1365531-82-3.png \' alt="1365531-82-3" height="250" width="250">',
                    ],
                    [
                        26.178465,
                        45.36586,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1204591-50-3.png \' alt="1204591-50-3" height="250" width="250">',
                    ],
                    [
                        20.189175,
                        38.00757,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2097438-97-4.png \' alt="2097438-97-4" height="250" width="250">',
                    ],
                    [
                        -0.641605,
                        39.49046,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/864529-88-4.png \' alt="864529-88-4" height="250" width="250">',
                    ],
                    [
                        -1.0885941,
                        33.146,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1365531-81-2.png \' alt="1365531-81-2" height="250" width="250">',
                    ],
                    [
                        16.810377,
                        35.652313,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2097438-99-6.png \' alt="2097438-99-6" height="250" width="250">',
                    ],
                    [
                        4.627237,
                        40.43659,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/340700-94-9.png \' alt="340700-94-9" height="250" width="250">',
                    ],
                    [
                        7.2206,
                        36.01996,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/215433-51-5.png \' alt="215433-51-5" height="250" width="250">',
                    ],
                    [
                        4.252097,
                        32.73025,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/215433-52-6.png \' alt="215433-52-6" height="250" width="250">',
                    ],
                    [
                        -10.129539,
                        48.00281,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1710694-47-5.png \' alt="1710694-47-5" height="250" width="250">',
                    ],
                    [
                        12.421588,
                        43.384987,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/524-63-0.png \' alt="524-63-0" height="250" width="250">',
                    ],
                    [
                        -6.2364264,
                        48.566082,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/736142-26-0.png \' alt="736142-26-0" height="250" width="250">',
                    ],
                    [
                        13.144583,
                        34.735664,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2495023-44-2.png \' alt="2495023-44-2" height="250" width="250">',
                    ],
                    [
                        -4.660649,
                        35.147648,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1365531-90-3.png \' alt="1365531-90-3" height="250" width="250">',
                    ],
                    [
                        19.492655,
                        38.17821,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2495023-45-3.png \' alt="2495023-45-3" height="250" width="250">',
                    ],
                    [
                        -5.4862947,
                        55.20946,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1508306-37-3.png \' alt="1508306-37-3" height="250" width="250">',
                    ],
                    [
                        17.02597,
                        49.78561,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/135096-78-5.png \' alt="135096-78-5" height="250" width="250">',
                    ],
                    [
                        13.52813,
                        46.68922,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2565792-36-9.png \' alt="2565792-36-9" height="250" width="250">',
                    ],
                    [
                        13.444243,
                        49.097603,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/852913-25-8.png \' alt="852913-25-8" height="250" width="250">',
                    ],
                    [
                        -5.4862947,
                        55.20946,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1637749-69-9.png \' alt="1637749-69-9" height="250" width="250">',
                    ],
                    [
                        17.480373,
                        48.16749,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/176097-24-8.png \' alt="176097-24-8" height="250" width="250">',
                    ],
                    [
                        4.627237,
                        40.43659,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/201732-49-2.png \' alt="201732-49-2" height="250" width="250">',
                    ],
                    [
                        14.300855,
                        36.18572,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1221187-87-6.png \' alt="1221187-87-6" height="250" width="250">',
                    ],
                    [
                        -4.5615606,
                        44.666187,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/444667-33-8.png \' alt="444667-33-8" height="250" width="250">',
                    ],
                    [
                        16.850075,
                        34.25377,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2495023-57-7.png \' alt="2495023-57-7" height="250" width="250">',
                    ],
                    [
                        15.537448,
                        50.697132,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/140853-10-7.png \' alt="140853-10-7" height="250" width="250">',
                    ],
                    [
                        19.03764,
                        47.303993,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/113162-02-0.png \' alt="113162-02-0" height="250" width="250">',
                    ],
                    [
                        -4.6637707,
                        35.142986,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1365531-89-0.png \' alt="1365531-89-0" height="250" width="250">',
                    ],
                    [
                        -3.5613017,
                        52.81934,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/239113-47-4.png \' alt="239113-47-4" height="250" width="250">',
                    ],
                    [
                        -1.0119194,
                        48.193108,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/342813-25-6.png \' alt="342813-25-6" height="250" width="250">',
                    ],
                    [
                        19.405872,
                        50.697548,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/149820-65-5.png \' alt="149820-65-5" height="250" width="250">',
                    ],
                    [
                        15.818059,
                        45.501953,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1362169-08-1.png \' alt="1362169-08-1" height="250" width="250">',
                    ],
                    [
                        -6.9998775,
                        50.85246,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/636559-56-3.png \' alt="636559-56-3" height="250" width="250">',
                    ],
                    [
                        -2.6855614,
                        46.34884,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/185449-80-3.png \' alt="185449-80-3" height="250" width="250">',
                    ],
                    [
                        7.963997,
                        31.528912,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/849939-13-5.png \' alt="849939-13-5" height="250" width="250">',
                    ],
                    [
                        21.635685,
                        42.246655,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/1630973-06-6.png \' alt="1630973-06-6" height="250" width="250">',
                    ],
                    [
                        19.237295,
                        36.16684,
                        '<img src=\'https://compbio.sjtu.edu.cn/services/clc-db/static/2Dimages/2495023-55-5.png \' alt="2495023-55-5" height="250" width="250">',
                    ],
                ],
                label: {
                    show: false,
                    margin: 8,
                },
            },
        ],

        legend: [
            {
                data: [
                    "class-0",
                    "class-1",
                    "class-2",
                    "class-3",
                    "class-4",
                    "class-5",
                    "class-6",
                    "class-7",
                    "class-8",
                    "class-9",
                ],
                selected: {
                    "class-0": true,
                    "class-1": true,
                    "class-2": true,
                    "class-3": true,
                    "class-4": true,
                    "class-5": true,
                    "class-6": true,
                    "class-7": true,
                    "class-8": true,
                    "class-9": true,
                },
                show: true,
                padding: 5,
                itemGap: 10,
                itemWidth: 25,
                itemHeight: 14,
                backgroundColor: "transparent",
                borderColor: "#ccc",
                borderWidth: 1,
                borderRadius: 0,
                pageButtonItemGap: 5,
                pageButtonPosition: "end",
                pageFormatter: "{current}/{total}",
                pageIconColor: "#2f4554",
                pageIconInactiveColor: "#aaa",
                pageIconSize: 15,
                animationDurationUpdate: 800,
                selector: false,
                selectorPosition: "auto",
                selectorItemGap: 7,
                selectorButtonGap: 10,
            },
        ],

        tooltip: {
            show: true,
            trigger: "item",
            triggerOn: "mousemove|click",
            axisPointer: {
                type: "line",
            },
            showContent: true,
            alwaysShowContent: false,
            showDelay: 0,
            hideDelay: 100,
            enterable: false,
            confine: false,
            appendToBody: false,
            transitionDuration: 0.4,
            formatter: function (params) {
                return params.value[2];
            },
            textStyle: {
                fontSize: 14,
            },
            borderWidth: 0,
            padding: 5,
            order: "seriesAsc",
        },

        xAxis: [
            {
                type: "value",
                show: true,
                scale: false,
                nameLocation: "end",
                nameGap: 15,
                gridIndex: 0,
                inverse: false,
                offset: 0,
                splitNumber: 5,
                minInterval: 0,
                splitLine: {
                    show: true,
                    lineStyle: {
                        show: true,
                        width: 1,
                        opacity: 1,
                        curveness: 0,
                        type: "solid",
                    },
                },
                data: null,
            },
        ],
        yAxis: [
            {
                type: "value",
                show: true,
                scale: false,
                nameLocation: "end",
                nameGap: 15,
                gridIndex: 0,
                axisTick: {
                    show: true,
                    alignWithLabel: false,
                    inside: false,
                },
                inverse: false,
                offset: 0,
                splitNumber: 5,
                minInterval: 0,
                splitLine: {
                    show: true,
                    lineStyle: {
                        show: true,
                        width: 1,
                        opacity: 1,
                        curveness: 0,
                        type: "solid",
                    },
                },
            },
        ],
        title: [
            {
                show: true,
                target: "blank",
                subtarget: "blank",
                padding: 5,
                itemGap: 10,
                textAlign: "auto",
                textVerticalAlign: "auto",
                triggerEvent: false,
            },
        ],
    };
    return <ReactEcharts option={option} style={{ height: 800, width: 800 }} />;
};

export default ClusterDemoChart;
