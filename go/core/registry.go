package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewBerufsbildungEntityFunc func(client *BerufsbildungDatenExporteSDK, entopts map[string]any) BerufsbildungDatenExporteEntity

