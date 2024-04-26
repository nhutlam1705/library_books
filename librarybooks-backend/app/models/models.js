const mongoose = require('mongoose');

const docGia = new mongoose.Schema({
    HoLot: String,
    Ten: String,
    NgaySinh: Date,
    Phai: String,
    DiaChi: String,
    DienThoai: String
});

const sach = new mongoose.Schema({
    TenSach: String,
    DonGia: Number,
    SoQuyen: Number,
    NamXuatBan: Number,
    MaNXB: String,
    NguonGoc: String
});

const nhaXuatBan = new mongoose.Schema({
    TenNXB: String,
    DiaChi: String
});

const theoDoiMuonSach = new mongoose.Schema({
    MaDocGia: { type: String, required: true },
    MaSach: { type: String, required: true },
    NgayMuon: Date,
    NgayTra: Date,
    DaTra: Boolean,
});

const nhanVien = new mongoose.Schema({
    HoTenNV: String,
    Password: String,
    ChucVu: String,
    DiaChi: String,
    SoDienThoai: String
});

const DocGia = mongoose.model('DocGia', docGia);
const Sach = mongoose.model('Sach', sach);
const NhaXuatBan = mongoose.model('NhaXuatBan', nhaXuatBan);
const TheoDoiMuonSach = mongoose.model('TheoDoiMuonSach', theoDoiMuonSach);
const NhanVien = mongoose.model('NhanVien', nhanVien);

module.exports = { DocGia, Sach, NhaXuatBan, TheoDoiMuonSach, NhanVien };
