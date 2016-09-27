function show_form(form_id){
  
  $("form").hide();

  $('#'+form_id).show("slow");

}

function edit_task(id, kode, nama, saldo, tipe, pewaris, akun_kategori, general, subgeneral, detail){
  var $pewaris = $("#edit_task_pewaris");
  if (kode == 'General')
  {
    $pewaris.attr("disabled", true);
    $("#edit_task_kode").mask(general);
  }
  else if (kode == 'Sub General')
  {
    $pewaris.attr("disabled", false);
    $("#edit_task_kode").mask(subgeneral);
  }
  else
  {
    $pewaris.attr("disabled", false);
    $("#edit_task_kode").mask(detail);
  }

  $.getJSON("../ajax/coa/" + tipe, function(data) {                 
    $pewaris.empty();
    $.each(data, function(index, value) {
        $pewaris.append('<option value="' + index +'">' + value + '</option>');
    });
  $pewaris.trigger("change");
  });

  $("#edit_task_id").val(id);
  $("#edit_task_kode").val(kode);
  $("#edit_task_nama").val(nama);
  $("#edit_task_saldo").val(saldo).change();
  $("#edit_task_tipe").val(tipe).change();
  $("#edit_task_pewaris").val(pewaris).change();
  $("#edit_task_akun_kategori").val(akun_kategori).change();

  show_form('edit_task');
}

function edit_produk(id, kode, nama, perkiraan, perkiraan_bunga, bunga, perkiraan_administrasi, administrasi, perkiraan_pajak, pajak, max_saldo, mengendap, accrual)
{
  $("#id").val(id);
  $("#kode").val(kode);
  $("#nama").val(nama);
  $("#perkiraan").val(perkiraan).change();
  $("#perkiraan_bunga").val(perkiraan_bunga).change();
  $("#bunga").val(bunga);
  $("#perkiraan_administrasi").val(perkiraan_administrasi).change();
  $("#admin").val(administrasi);
  $("#perkiraan_pajak").val(perkiraan_pajak).change();
  $("#pajak").val(pajak);
  $("#saldo_bebas_pajak").val(max_saldo);
  $("#mengendap").val(mengendap);
  $("#accrual").val(accrual).change();
}

function edit_deposito(id, kode, nama, perkiraan, perkiraan_bunga, bunga, perkiraan_administrasi, administrasi, perkiraan_pajak, pajak, max_saldo, titipan_bunga, kewajiban_bunga)
{
  $("#id").val(id);
  $("#kode").val(kode);
  $("#nama").val(nama);
  $("#perkiraan").val(perkiraan).change();
  $("#perkiraan_bunga").val(perkiraan_bunga).change();
  $("#bunga").val(bunga);
  $("#perkiraan_administrasi").val(perkiraan_administrasi).change();
  $("#admin").val(administrasi);
  $("#perkiraan_pajak").val(perkiraan_pajak).change();
  $("#pajak").val(pajak);
  $("#saldo_bebas_pajak").val(max_saldo);
  $("#titipan_bunga").val(titipan_bunga).change();
  $("#kewajiban_bunga").val(kewajiban_bunga).change();
}

function edit_kredit(id, kode, nama, perkiraan, perkiraan_bunga, bunga, perkiraan_administrasi, administrasi, perkiraan_provisi, provisi, perkiraan_denda, denda, perkiraan_komisi_kaops, komisi_kaops, perkiraan_komisi_juru_bayar, komisi_juru_bayar, perkiraan_materai, perkiraan_pembulatan, perkiraan_pajak, pajak, max_saldo, bunga_diterima, amortisasi_provisi, amortisasi_administrasi, amortisasi_biaya_diskon, perkiraan_asuransi, perkiraan_notaris)
{
  $("#id").val(id);
  $("#kode").val(kode);
  $("#nama").val(nama);
  $("#perkiraan").val(perkiraan).change();
  $("#perkiraan_bunga").val(perkiraan_bunga).change();
  $("#bunga").val(bunga);
  $("#perkiraan_administrasi").val(perkiraan_administrasi).change();
  $("#admin").val(administrasi);
  $("#perkiraan_provisi").val(perkiraan_provisi).change();
  $("#provisi").val(provisi);
  $("#perkiraan_denda").val(perkiraan_denda).change();
  $("#denda").val(denda);
  $("#perkiraan_komisi_kaops").val(perkiraan_komisi_kaops).change();
  $("#komisi_kaops").val(komisi_kaops);
  $("#perkiraan_komisi_juru_bayar").val(perkiraan_komisi_juru_bayar).change();
  $("#komisi_juru_bayar").val(komisi_juru_bayar);
  $("#perkiraan_materai").val(perkiraan_materai).change();
  $("#perkiraan_nilai_pembulatan").val(perkiraan_pembulatan);
  $("#perkiraan_pajak").val(perkiraan_pajak).change();
  $("#pajak").val(pajak);
  $("#saldo_bebas_pajak").val(max_saldo);
  $("#bunga_diterima").val(bunga_diterima).change();
  $("#amortisasi_provisi").val(amortisasi_provisi).change();
  $("#amortisasi_administrasi").val(amortisasi_administrasi).change();
  $("#biaya_diskon").val(amortisasi_biaya_diskon).change();
  $("#perkiraan_asuransi").val(perkiraan_asuransi).change();
  $("#perkiraan_notaris").val(perkiraan_notaris).change();
}

function edit_instansi(id, nama, telepon, kontak, alamat, perkiraan)
{
  $("#id").val(id);
  $("#nama").val(nama);
  $("#telepon").val(telepon);
  $("#kontak").val(kontak);
  $("#alamat").val(alamat);
  $("#perkiraan").val(perkiraan).change();
}

function pick_nasabah(id, nomor_register, nama)
{
  $("#id").val(id);
  $("#namaNasabah").val(nama);
  $("#nomorRegister").val(nomor_register);
}