package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewBerufsbildungEntityFunc func(client *BerufsbildungDatenExporteSDK, entopts map[string]any) BerufsbildungDatenExporteEntity

