@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">SIMULASI KREDIT</div>

                <div class="panel-body">
                    <div class="form-group">
                        {!! Form::label('plafon', 'Plafon', ['class' => 'control-label col-xs-12 col-sm-3 no-padding-right']); !!}
                        <div class="col-xs-12 col-sm-9">
                            <div class="clearfix">
                                {!! Form::text('plafon', null, ['id' => 'plafon', 'class' => 'col-xs-12 col-sm-6', 'placeholder' => 'Masukkan Plafon']) !!}
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        {!! Form::label('bunga', 'Bunga', ['class' => 'control-label col-xs-12 col-sm-3 no-padding-right']); !!}
                        <div class="col-xs-12 col-sm-9">
                            <div class="clearfix">
                                {!! Form::text('bunga', null, ['id' => 'bunga', 'class' => 'col-xs-12 col-sm-6', 'placeholder' => 'Bunga']) !!}
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        {!! Form::label('Jwaktu', 'Jangka Waktu', ['class' => 'control-label col-xs-12 col-sm-3 no-padding-right']); !!}
                        <div class="col-xs-12 col-sm-9">
                            <div class="clearfix">
                                {!! Form::text('jwaktu', null, ['id' => 'jwaktu', 'class' => 'col-xs-12 col-sm-6', 'placeholder' => 'Jangka waktu']) !!}
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        {!! Form::label('jbunga', 'Jenis Bunga', ['class' => 'control-label col-xs-12 col-sm-3 no-padding-right']); !!}
                        <div class="col-xs-12 col-sm-9">
                            <div class="clearfix">
                                {!! Form::select('jbunga',['','Flat','Efektif','anytas'], ['class' => 'select2']); !!}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
