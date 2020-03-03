@extends('skateboards/main')
@section('content')
<div class="row">
    <div class="col-md mb-5"  data-aos="fade">
        <form method = "POST" action="/product_update_db/{{$product->id}}" enctype="multipart/form-data" class="p-5 bg-white">
            @csrf
            <input type="hidden" name="id" value="{{$product->id}}">
            <div class="row form-group">
                <div class="col-md-12">
                    <label class="text-black" for="email">Category ID</label>
                    <input type="text" id="category" name="category" class="form-control" value="{{ $product->catId }}">
                </div>
            </div>
            <div class="row form-group">

                <div class="col-md-12">
                    <label class="text-black" for="email">Skelbimo pavadinimas</label>
                    <input type="text" id="title" name="name" class="form-control" value="{{ $product->name }}">
                </div>
            </div>

            <div class="row form-group">
                <div class="col-md-12">
                    <label class="text-black" for="message">Aprasymas</label>
                    <textarea name="description" cols="30" rows="7" class="form-control">{{ $product->description }}</textarea>
                </div>
            </div>

            <div class="row form-group">

                <div class="col-md-12">
                    <label class="text-black" for="email">Nuotraukos</label>
                    <input type="file" id="image" name="image" class="form-control" value="{{ $product->img }}">
                    <img src="{{asset('storage/'.$product->img)}}" alt="Image" class="img-fluid rounded">
                </div>
            </div>

            <div class="row form-group">

                <div class="col-md-12">
                    <label class="text-black" for="subject">Kaina</label>
                    <input type="number" id="price" name="price" class="form-control" value="{{ $product->price }}">
                </div>
            </div>

            <div class="row form-group">

                <div class="col-md-12">
                    <label class="text-black" for="subject">Kiekis</label>
                    <input type="text" id="location" name="quantity" class="form-control" value="{{ $product->quantity }}">
                </div>
            </div>

            <div class="row form-group">
                <div class="col-md-12">
                    <input type="submit" id = "submit" name="submit" value="Patvirtinti" class="btn btn-primary py-2 px-4 text-white">
                </div>
            </div>


        </form>
    </div>
</div>
@stop
