package core

type BerufsbildungDatenExporteError struct {
	IsBerufsbildungDatenExporteError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewBerufsbildungDatenExporteError(code string, msg string, ctx *Context) *BerufsbildungDatenExporteError {
	return &BerufsbildungDatenExporteError{
		IsBerufsbildungDatenExporteError: true,
		Sdk:              "BerufsbildungDatenExporte",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *BerufsbildungDatenExporteError) Error() string {
	return e.Msg
}
