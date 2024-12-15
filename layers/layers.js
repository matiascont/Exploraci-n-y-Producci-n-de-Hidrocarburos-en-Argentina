ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-78.434161, -51.338003, -37.715744, -30.978795]);
var wms_layers = [];


        var lyr_MapaESRIGraydark_0 = new ol.layer.Tile({
            'title': 'Mapa (ESRI Gray dark)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_ProfundidadpromediodeYacimientos_1 = new ol.format.GeoJSON();
var features_ProfundidadpromediodeYacimientos_1 = format_ProfundidadpromediodeYacimientos_1.readFeatures(json_ProfundidadpromediodeYacimientos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ProfundidadpromediodeYacimientos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProfundidadpromediodeYacimientos_1.addFeatures(features_ProfundidadpromediodeYacimientos_1);
var lyr_ProfundidadpromediodeYacimientos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProfundidadpromediodeYacimientos_1, 
                style: style_ProfundidadpromediodeYacimientos_1,
                popuplayertitle: 'Profundidad promedio de Yacimientos',
                interactive: true,
    title: 'Profundidad promedio de Yacimientos<br />\
    <img src="styles/legend/ProfundidadpromediodeYacimientos_1_0.png" /> 0 - 1332<br />\
    <img src="styles/legend/ProfundidadpromediodeYacimientos_1_1.png" /> 1332 - 1869<br />\
    <img src="styles/legend/ProfundidadpromediodeYacimientos_1_2.png" /> 1869 - 2275<br />\
    <img src="styles/legend/ProfundidadpromediodeYacimientos_1_3.png" /> 2275 - 2969<br />\
    <img src="styles/legend/ProfundidadpromediodeYacimientos_1_4.png" /> 2969 - 6179<br />'
        });
var format_PermisosdeExploracinOffshore_2 = new ol.format.GeoJSON();
var features_PermisosdeExploracinOffshore_2 = format_PermisosdeExploracinOffshore_2.readFeatures(json_PermisosdeExploracinOffshore_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PermisosdeExploracinOffshore_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermisosdeExploracinOffshore_2.addFeatures(features_PermisosdeExploracinOffshore_2);
var lyr_PermisosdeExploracinOffshore_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermisosdeExploracinOffshore_2, 
                style: style_PermisosdeExploracinOffshore_2,
                popuplayertitle: 'Permisos de Exploración (Offshore)',
                interactive: true,
                title: '<img src="styles/legend/PermisosdeExploracinOffshore_2.png" /> Permisos de Exploración (Offshore)'
            });
var format_PermisosdeExploracin_3 = new ol.format.GeoJSON();
var features_PermisosdeExploracin_3 = format_PermisosdeExploracin_3.readFeatures(json_PermisosdeExploracin_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PermisosdeExploracin_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermisosdeExploracin_3.addFeatures(features_PermisosdeExploracin_3);
var lyr_PermisosdeExploracin_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermisosdeExploracin_3, 
                style: style_PermisosdeExploracin_3,
                popuplayertitle: 'Permisos de Exploración',
                interactive: true,
    title: 'Permisos de Exploración<br />\
    <img src="styles/legend/PermisosdeExploracin_3_0.png" /> ARGENTA ENERGIA S.A.<br />\
    <img src="styles/legend/PermisosdeExploracin_3_1.png" /> CAPEX S.A.<br />\
    <img src="styles/legend/PermisosdeExploracin_3_2.png" /> COMPAÑÍA GENERAL DE COMBUSTIBLES S.A.<br />\
    <img src="styles/legend/PermisosdeExploracin_3_3.png" /> CROWN POINT ENERGIA S.A.<br />\
    <img src="styles/legend/PermisosdeExploracin_3_4.png" /> HIGH LUCK GROUP LTD. - SUCURSAL ARGENTINA<br />\
    <img src="styles/legend/PermisosdeExploracin_3_5.png" /> KILWER S.A.<br />\
    <img src="styles/legend/PermisosdeExploracin_3_6.png" /> MADALENA ENERGY ARGENTINA SRL<br />\
    <img src="styles/legend/PermisosdeExploracin_3_7.png" /> OIL M&S S.A.<br />\
    <img src="styles/legend/PermisosdeExploracin_3_8.png" /> PAMPA ENERGIA S.A.<br />\
    <img src="styles/legend/PermisosdeExploracin_3_9.png" /> PAN AMERICAN ENERGY SL<br />\
    <img src="styles/legend/PermisosdeExploracin_3_10.png" /> PETRO AP S.A.<br />\
    <img src="styles/legend/PermisosdeExploracin_3_11.png" /> PETROLERA DEL COMAHUE S.A.<br />\
    <img src="styles/legend/PermisosdeExploracin_3_12.png" /> PETROLERA EL TREBOL S.A.<br />\
    <img src="styles/legend/PermisosdeExploracin_3_13.png" /> PETROLERA PAMPA S.A.<br />\
    <img src="styles/legend/PermisosdeExploracin_3_14.png" /> PETROLERA PIEDRA DEL AGUILA S.A.<br />\
    <img src="styles/legend/PermisosdeExploracin_3_15.png" /> PETROQUIMICA COMODORO RIVADAVIA S.A.<br />\
    <img src="styles/legend/PermisosdeExploracin_3_16.png" /> PLUSPETROL S.A.<br />\
    <img src="styles/legend/PermisosdeExploracin_3_17.png" /> ROCH S.A.<br />\
    <img src="styles/legend/PermisosdeExploracin_3_18.png" /> SELVA MARIA OIL S.A.<br />\
    <img src="styles/legend/PermisosdeExploracin_3_19.png" /> SHELL ARGENTINA S.A.<br />\
    <img src="styles/legend/PermisosdeExploracin_3_20.png" /> TECPETROL S.A.<br />\
    <img src="styles/legend/PermisosdeExploracin_3_21.png" /> TOTAL AUSTRAL S.A.<br />\
    <img src="styles/legend/PermisosdeExploracin_3_22.png" /> TULLOW ARGENTINA LIMITED SUCURSAL ARGENTINA<br />\
    <img src="styles/legend/PermisosdeExploracin_3_23.png" /> WINTERSHALL DEA ARGENTINA S.A<br />\
    <img src="styles/legend/PermisosdeExploracin_3_24.png" /> YPF S.A.<br />'
        });
var format_LotesdeExploracin_4 = new ol.format.GeoJSON();
var features_LotesdeExploracin_4 = format_LotesdeExploracin_4.readFeatures(json_LotesdeExploracin_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LotesdeExploracin_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LotesdeExploracin_4.addFeatures(features_LotesdeExploracin_4);
var lyr_LotesdeExploracin_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LotesdeExploracin_4, 
                style: style_LotesdeExploracin_4,
                popuplayertitle: 'Lotes de Exploración',
                interactive: true,
                title: '<img src="styles/legend/LotesdeExploracin_4.png" /> Lotes de Exploración'
            });
var format_ExploracinenCuencasSedimentarias_5 = new ol.format.GeoJSON();
var features_ExploracinenCuencasSedimentarias_5 = format_ExploracinenCuencasSedimentarias_5.readFeatures(json_ExploracinenCuencasSedimentarias_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ExploracinenCuencasSedimentarias_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExploracinenCuencasSedimentarias_5.addFeatures(features_ExploracinenCuencasSedimentarias_5);
var lyr_ExploracinenCuencasSedimentarias_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExploracinenCuencasSedimentarias_5, 
                style: style_ExploracinenCuencasSedimentarias_5,
                popuplayertitle: 'Exploración en Cuencas Sedimentarias',
                interactive: true,
    title: 'Exploración en Cuencas Sedimentarias<br />\
    <img src="styles/legend/ExploracinenCuencasSedimentarias_5_0.png" /> No Productiva<br />\
    <img src="styles/legend/ExploracinenCuencasSedimentarias_5_1.png" /> Productiva<br />'
        });
var format_LineamientosGeofsicosOcenicos_6 = new ol.format.GeoJSON();
var features_LineamientosGeofsicosOcenicos_6 = format_LineamientosGeofsicosOcenicos_6.readFeatures(json_LineamientosGeofsicosOcenicos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LineamientosGeofsicosOcenicos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineamientosGeofsicosOcenicos_6.addFeatures(features_LineamientosGeofsicosOcenicos_6);
var lyr_LineamientosGeofsicosOcenicos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LineamientosGeofsicosOcenicos_6, 
                style: style_LineamientosGeofsicosOcenicos_6,
                popuplayertitle: 'Lineamientos Geofísicos Oceánicos',
                interactive: true,
    title: 'Lineamientos Geofísicos Oceánicos<br />\
    <img src="styles/legend/LineamientosGeofsicosOcenicos_6_0.png" /> Alineaciones magnéticas<br />\
    <img src="styles/legend/LineamientosGeofsicosOcenicos_6_1.png" /> Anomalías gravimétricas<br />\
    <img src="styles/legend/LineamientosGeofsicosOcenicos_6_2.png" /> Límite Oceánico Continental<br />\
    <img src="styles/legend/LineamientosGeofsicosOcenicos_6_3.png" /> Lineamiento<br />\
    <img src="styles/legend/LineamientosGeofsicosOcenicos_6_4.png" /> Zona de fractura<br />\
    <img src="styles/legend/LineamientosGeofsicosOcenicos_6_5.png" /> Zona de trasferencia principal<br />'
        });
var format_LneasSsmicas2D_7 = new ol.format.GeoJSON();
var features_LneasSsmicas2D_7 = format_LneasSsmicas2D_7.readFeatures(json_LneasSsmicas2D_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LneasSsmicas2D_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LneasSsmicas2D_7.addFeatures(features_LneasSsmicas2D_7);
var lyr_LneasSsmicas2D_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LneasSsmicas2D_7, 
                style: style_LneasSsmicas2D_7,
                popuplayertitle: 'Líneas Sísmicas 2D',
                interactive: true,
    title: 'Líneas Sísmicas 2D<br />\
    <img src="styles/legend/LneasSsmicas2D_7_0.png" /> AMERICAS PETROGAS ARGENTINA S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_1.png" /> APCO OIL AND GAS INTERNATIONAL INC (SUCURSAL ARGENTINA)<br />\
    <img src="styles/legend/LneasSsmicas2D_7_2.png" /> ARGENTA ENERGIA S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_3.png" /> CAPETROL ARGENTINA S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_4.png" /> CENTRAL INTERNATIONAL CORPORATION (SUCURSAL ARGENTINA)<br />\
    <img src="styles/legend/LneasSsmicas2D_7_5.png" /> CGC ENERGIA SAU<br />\
    <img src="styles/legend/LneasSsmicas2D_7_6.png" /> CHEVRON ARGENTINA S.R.L.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_7.png" /> COLHUE HUAPI S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_8.png" /> COMPAÑÍA GENERAL DE COMBUSTIBLES S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_9.png" /> CROWN POINT ENERGIA S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_10.png" /> DAPETROL S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_11.png" /> ENAP SIPETROL ARGENTINA S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_12.png" /> ENARSA ENERGIA ARGENTINA S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_13.png" /> ENERGIAL S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_14.png" /> ENERGICON S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_15.png" /> ENI ARGENTINA EXPLORACION Y EXPLOTACION S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_16.png" /> EXXONMOBIL EXPLORATION AND PRODUCTION OFFSHORE ARGENTINA S.R.L.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_17.png" /> EXXONMOBIL EXPLORATION ARGENTINA S.R.L.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_18.png" /> FOMICRUZ S.E.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_19.png" /> GAS Y PETROLEO DEL NEUQUEN S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_20.png" /> GOLDEN OIL CORPORATION Suc. Arg.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_21.png" /> HATTRICK ENERGY SAS<br />\
    <img src="styles/legend/LneasSsmicas2D_7_22.png" /> HIGH LUCK GROUP LTD. - SUCURSAL ARGENTINA<br />\
    <img src="styles/legend/LneasSsmicas2D_7_23.png" /> INGENIERIA ALPA S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_24.png" /> KILWER S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_25.png" /> MADALENA ENERGY ARGENTINA SRL<br />\
    <img src="styles/legend/LneasSsmicas2D_7_26.png" /> MEDANITO S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_27.png" /> OIL M&S S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_28.png" /> OILSTONE ENERGIA S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_29.png" /> PAN AMERICAN ENERGY (SUCURSAL ARGENTINA) LLC<br />\
    <img src="styles/legend/LneasSsmicas2D_7_30.png" /> PAN AMERICAN ENERGY SL<br />\
    <img src="styles/legend/LneasSsmicas2D_7_31.png" /> PETROBRAS ARGENTINA S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_32.png" /> PETROFARO S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_33.png" /> PETROLEOS SUDAMERICANOS S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_34.png" /> PETROLERA DEL COMAHUE S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_35.png" /> PETROLERA ENTRE LOMAS S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_36.png" /> PETROLERA PIEDRA DEL AGUILA S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_37.png" /> PETROQUIMICA COMODORO RIVADAVIA S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_38.png" /> Pilgrim Energy S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_39.png" /> PLUSPETROL ENERGY S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_40.png" /> PLUSPETROL S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_41.png" /> PRESIDENT PETROLEUM S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_42.png" /> QUINTANA E&P ARGENTINA S.R.L.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_43.png" /> ROCH S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_44.png" /> SAN JORGE PETROLEUM S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_45.png" /> SELVA MARIA OIL S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_46.png" /> SINOPEC ARGENTINA EXPLORATION AND PRODUCTION, INC.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_47.png" /> TECPETROL S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_48.png" /> TOTAL AUSTRAL S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_49.png" /> UNITEC ENERGY S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_50.png" /> VENOIL S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_51.png" /> VISTA OIL & GAS ARGENTINA SAU<br />\
    <img src="styles/legend/LneasSsmicas2D_7_52.png" /> WINTERSHALL ENERGIA S.A.<br />\
    <img src="styles/legend/LneasSsmicas2D_7_53.png" /> YPF S.A.<br />'
        });
var format_reasSsmicas3D_8 = new ol.format.GeoJSON();
var features_reasSsmicas3D_8 = format_reasSsmicas3D_8.readFeatures(json_reasSsmicas3D_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasSsmicas3D_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasSsmicas3D_8.addFeatures(features_reasSsmicas3D_8);
var lyr_reasSsmicas3D_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasSsmicas3D_8, 
                style: style_reasSsmicas3D_8,
                popuplayertitle: 'Áreas Sísmicas 3D',
                interactive: true,
    title: 'Áreas Sísmicas 3D<br />\
    <img src="styles/legend/reasSsmicas3D_8_0.png" /> AMERICAS PETROGAS ARGENTINA S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_1.png" /> APCO OIL AND GAS INTERNATIONAL INC (SUCURSAL ARGENTINA)<br />\
    <img src="styles/legend/reasSsmicas3D_8_2.png" /> ARGENTA ENERGIA S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_3.png" /> CAPETROL ARGENTINA S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_4.png" /> CAPETROL S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_5.png" /> CAPEX S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_6.png" /> CENTRAL INTERNATIONAL CORPORATION (SUCURSAL ARGENTINA)<br />\
    <img src="styles/legend/reasSsmicas3D_8_7.png" /> CGC ENERGIA SAU<br />\
    <img src="styles/legend/reasSsmicas3D_8_8.png" /> CHAÑARES ENERGIA S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_9.png" /> CHEVRON ARGENTINA S.R.L.<br />\
    <img src="styles/legend/reasSsmicas3D_8_10.png" /> COLHUE HUAPI S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_11.png" /> COMPAÑÍA GENERAL DE COMBUSTIBLES S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_12.png" /> COMPAÑÍAS ASOCIADAS PETROLERAS S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_13.png" /> CROWN POINT ENERGIA S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_14.png" /> DAPETROL S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_15.png" /> ENAP SIPETROL ARGENTINA S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_16.png" /> ENERGIAL S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_17.png" /> EXXONMOBIL EXPLORATION AND PRODUCTION OFFSHORE ARGENTINA S.R.L.<br />\
    <img src="styles/legend/reasSsmicas3D_8_18.png" /> EXXONMOBIL EXPLORATION ARGENTINA S.R.L.<br />\
    <img src="styles/legend/reasSsmicas3D_8_19.png" /> FOMICRUZ S.E.<br />\
    <img src="styles/legend/reasSsmicas3D_8_20.png" /> GAS Y PETROLEO DEL NEUQUEN S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_21.png" /> GRECOIL y CIA. S.R.L.<br />\
    <img src="styles/legend/reasSsmicas3D_8_22.png" /> HIGH LUCK GROUP LTD. - SUCURSAL ARGENTINA<br />\
    <img src="styles/legend/reasSsmicas3D_8_23.png" /> INGENIERIA ALPA S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_24.png" /> KILWER S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_25.png" /> MADALENA ENERGY ARGENTINA SRL<br />\
    <img src="styles/legend/reasSsmicas3D_8_26.png" /> MEDANITO S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_27.png" /> OILSTONE ENERGIA S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_28.png" /> PAN AMERICAN ENERGY (SUCURSAL ARGENTINA) LLC<br />\
    <img src="styles/legend/reasSsmicas3D_8_29.png" /> PAN AMERICAN ENERGY SL<br />\
    <img src="styles/legend/reasSsmicas3D_8_30.png" /> PETROBRAS ARGENTINA S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_31.png" /> PETROFARO S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_32.png" /> PETROLEOS SUDAMERICANOS S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_33.png" /> PETROLERA DEL COMAHUE S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_34.png" /> PETROLERA EL TREBOL S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_35.png" /> PETROLERA ENTRE LOMAS S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_36.png" /> PETROLERA PAMPA S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_37.png" /> PETROLERA PIEDRA DEL AGUILA S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_38.png" /> PETROQUIMICA COMODORO RIVADAVIA S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_39.png" /> Pilgrim Energy S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_40.png" /> PLUSPETROL ENERGY S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_41.png" /> PLUSPETROL S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_42.png" /> PRESIDENT PETROLEUM S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_43.png" /> QUINTANA E&P ARGENTINA S.R.L.<br />\
    <img src="styles/legend/reasSsmicas3D_8_44.png" /> ROCH S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_45.png" /> SAN JORGE PETROLEUM S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_46.png" /> SELVA MARIA OIL S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_47.png" /> SINOPEC ARGENTINA EXPLORATION AND PRODUCTION, INC.<br />\
    <img src="styles/legend/reasSsmicas3D_8_48.png" /> TECPETROL S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_49.png" /> TOTAL AUSTRAL S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_50.png" /> TULLOW ARGENTINA LIMITED SUCURSAL ARGENTINA<br />\
    <img src="styles/legend/reasSsmicas3D_8_51.png" /> VISTA ENERGY ARGENTINA SAU<br />\
    <img src="styles/legend/reasSsmicas3D_8_52.png" /> VISTA OIL & GAS ARGENTINA SAU<br />\
    <img src="styles/legend/reasSsmicas3D_8_53.png" /> WINTERSHALL ENERGIA S.A.<br />\
    <img src="styles/legend/reasSsmicas3D_8_54.png" /> YPF S.A.<br />'
        });

lyr_MapaESRIGraydark_0.setVisible(true);lyr_ProfundidadpromediodeYacimientos_1.setVisible(false);lyr_PermisosdeExploracinOffshore_2.setVisible(false);lyr_PermisosdeExploracin_3.setVisible(false);lyr_LotesdeExploracin_4.setVisible(false);lyr_ExploracinenCuencasSedimentarias_5.setVisible(false);lyr_LineamientosGeofsicosOcenicos_6.setVisible(false);lyr_LneasSsmicas2D_7.setVisible(false);lyr_reasSsmicas3D_8.setVisible(false);
var layersList = [lyr_MapaESRIGraydark_0,lyr_ProfundidadpromediodeYacimientos_1,lyr_PermisosdeExploracinOffshore_2,lyr_PermisosdeExploracin_3,lyr_LotesdeExploracin_4,lyr_ExploracinenCuencasSedimentarias_5,lyr_LineamientosGeofsicosOcenicos_6,lyr_LneasSsmicas2D_7,lyr_reasSsmicas3D_8];
lyr_ProfundidadpromediodeYacimientos_1.set('fieldAliases', {'AREAYACIMI': 'AREAYACIMI', 'EMPRESA_IN': 'EMPRESA_IN', 'EMPRESA_OP': 'EMPRESA_OP', 'PROFUNDIDA': 'PROFUNDIDA', 'PROFUND_01': 'PROFUND_01', 'PROFUND_02': 'PROFUND_02', });
lyr_PermisosdeExploracinOffshore_2.set('fieldAliases', {'UTE': 'UTE', });
lyr_PermisosdeExploracin_3.set('fieldAliases', {'NOMBRE_DE_': 'NOMBRE_DE_', 'EMPRESA_OP': 'EMPRESA_OP', 'EMPRESA_IN': 'EMPRESA_IN', });
lyr_LotesdeExploracin_4.set('fieldAliases', {'LOTE': 'LOTE', 'EMPRESA_IN': 'EMPRESA_IN', });
lyr_ExploracinenCuencasSedimentarias_5.set('fieldAliases', {'CUENCA': 'CUENCA', 'TIPO': 'TIPO', 'UBICACION': 'UBICACION', });
lyr_LineamientosGeofsicosOcenicos_6.set('fieldAliases', {'tipo': 'tipo', 'descripcion': 'descripcion', });
lyr_LneasSsmicas2D_7.set('fieldAliases', {'LINEA': 'LINEA', 'EMPRESA_IN': 'EMPRESA_IN', });
lyr_reasSsmicas3D_8.set('fieldAliases', {'PROYECT': 'PROYECT', 'EMPRESA_IN': 'EMPRESA_IN', });
lyr_ProfundidadpromediodeYacimientos_1.set('fieldImages', {'AREAYACIMI': '', 'EMPRESA_IN': '', 'EMPRESA_OP': '', 'PROFUNDIDA': '', 'PROFUND_01': '', 'PROFUND_02': '', });
lyr_PermisosdeExploracinOffshore_2.set('fieldImages', {'UTE': '', });
lyr_PermisosdeExploracin_3.set('fieldImages', {'NOMBRE_DE_': '', 'EMPRESA_OP': '', 'EMPRESA_IN': '', });
lyr_LotesdeExploracin_4.set('fieldImages', {'LOTE': '', 'EMPRESA_IN': '', });
lyr_ExploracinenCuencasSedimentarias_5.set('fieldImages', {'CUENCA': '', 'TIPO': '', 'UBICACION': '', });
lyr_LineamientosGeofsicosOcenicos_6.set('fieldImages', {'tipo': '', 'descripcion': '', });
lyr_LneasSsmicas2D_7.set('fieldImages', {'LINEA': '', 'EMPRESA_IN': '', });
lyr_reasSsmicas3D_8.set('fieldImages', {'PROYECT': '', 'EMPRESA_IN': '', });
lyr_ProfundidadpromediodeYacimientos_1.set('fieldLabels', {'AREAYACIMI': 'inline label - always visible', 'EMPRESA_IN': 'inline label - always visible', 'EMPRESA_OP': 'inline label - always visible', 'PROFUNDIDA': 'inline label - always visible', 'PROFUND_01': 'inline label - always visible', 'PROFUND_02': 'inline label - always visible', });
lyr_PermisosdeExploracinOffshore_2.set('fieldLabels', {'UTE': 'inline label - always visible', });
lyr_PermisosdeExploracin_3.set('fieldLabels', {'NOMBRE_DE_': 'hidden field', 'EMPRESA_OP': 'inline label - always visible', 'EMPRESA_IN': 'inline label - always visible', });
lyr_LotesdeExploracin_4.set('fieldLabels', {'LOTE': 'inline label - always visible', 'EMPRESA_IN': 'inline label - always visible', });
lyr_ExploracinenCuencasSedimentarias_5.set('fieldLabels', {'CUENCA': 'inline label - always visible', 'TIPO': 'inline label - always visible', 'UBICACION': 'inline label - always visible', });
lyr_LineamientosGeofsicosOcenicos_6.set('fieldLabels', {'tipo': 'inline label - always visible', 'descripcion': 'inline label - always visible', });
lyr_LneasSsmicas2D_7.set('fieldLabels', {'LINEA': 'inline label - always visible', 'EMPRESA_IN': 'inline label - always visible', });
lyr_reasSsmicas3D_8.set('fieldLabels', {'PROYECT': 'inline label - always visible', 'EMPRESA_IN': 'inline label - always visible', });
lyr_reasSsmicas3D_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});