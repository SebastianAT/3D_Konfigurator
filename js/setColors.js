
function SetColorNew(nr, num, color, name) {
    document.getElementById("colorChoosen" + num + nr).value = color;
    document.getElementById("color" + num + nr).value = name;
    document.getElementById("color" + num + nr).style.background = "#" + color;
    var hex = "0x" + color;
    if (num == 20) {
        if (nr == 1) {
            loko.body1.forEach(part => part.setHex(hex));

            if (isShort == true) {
                if (counter == 1) {
                    shortTrailerNr1.body1.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 30 + 2).value = color;
                    document.getElementById("color" + 30 + 2).value = name;
                    document.getElementById("color" + 30 + 2).style.background = "#" + color;
                } else if (counter == 2) {
                    shortTrailerNr2.body1.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 30 + 3).value = color;
                    document.getElementById("color" + 30 + 3).value = name;
                    document.getElementById("color" + 30 + 3).style.background = "#" + color;
                    shortTrailerNr1.body1.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 30 + 2).value = color;
                    document.getElementById("color" + 30 + 2).value = name;
                    document.getElementById("color" + 30 + 2).style.background = "#" + color;
                } else if (counter == 3) {
                    shortTrailerNr2.body1.forEach(part => part.setHex(hex));
                    shortTrailerNr3.body1.forEach(part => part.setHex(hex));
                    shortTrailerNr1.body1.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 30 + 2).value = color;
                    document.getElementById("color" + 30 + 2).value = name;
                    document.getElementById("color" + 30 + 2).style.background = "#" + color;
                    document.getElementById("colorChoosen" + 30 + 3).value = color;
                    document.getElementById("color" + 30 + 3).value = name;
                    document.getElementById("color" + 30 + 3).style.background = "#" + color;
                    document.getElementById("colorChoosen" + 30 + 4).value = color;
                    document.getElementById("color" + 30 + 4).value = name;
                    document.getElementById("color" + 30 + 4).style.background = "#" + color;
                }
            }

            if (counter3 == 4) {
                if (isLong == true) {
                    longTrailerNr1.body.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 30 + 5).value = color;
                    document.getElementById("color" + 30 + 5).value = name;
                    document.getElementById("color" + 30 + 5).style.background = "#" + color;
                }

            } else if (counter3 == 5) {
                if (isLong == true) {
                    longTrailerNr1.body.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 30 + 5).value = color;
                    document.getElementById("color" + 30 + 5).value = name;
                    document.getElementById("color" + 30 + 5).style.background = "#" + color;
                    longTrailerNr2.body.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 30 + 6).value = color;
                    document.getElementById("color" + 30 + 6).value = name;
                    document.getElementById("color" + 30 + 6).style.background = "#" + color;
                }
            }
        }

        if (nr == 2) {
            shortTrailerNr1.body.forEach(part => part.setHex(hex));
            if (counter == 2) {
                shortTrailerNr2.body.forEach(part => part.setHex(hex));
                document.getElementById("colorChoosen" + num + 3).value = color;
                document.getElementById("color" + num + 3).value = name;
                document.getElementById("color" + num + 3).style.background = "#" + color;
            } else if (counter == 3) {
                shortTrailerNr2.body.forEach(part => part.setHex(hex));
                shortTrailerNr3.body.forEach(part => part.setHex(hex));
                document.getElementById("colorChoosen" + num + 3).value = color;
                document.getElementById("color" + num + 3).value = name;
                document.getElementById("color" + num + 3).style.background = "#" + color;
                document.getElementById("colorChoosen" + num + 4).value = color;
                document.getElementById("color" + num + 4).value = name;
                document.getElementById("color" + num + 4).style.background = "#" + color;
            }
        }

        if (nr == 3) {
            shortTrailerNr2.body.forEach(part => part.setHex(hex));
        }

        if (nr == 4) {
            shortTrailerNr3.body.forEach(part => part.setHex(hex));
        }

        if (nr == 5) {
            longTrailerNr1.body5.forEach(part => part.setHex(hex));
            if (counter3 == 5) {
                longTrailerNr2.body5.forEach(part => part.setHex(hex));
                document.getElementById("colorChoosen" + num + 6).value = color;
                document.getElementById("color" + num + 6).value = name;
                document.getElementById("color" + num + 6).style.background = "#" + color;
            }
        }

        if (nr == 6) {
            longTrailerNr2.body5.forEach(part => part.setHex(hex));

        }
    }

    if (num == 30) {
        if (nr == 1) {
            loko.body2.forEach(part => part.setHex(hex));
            if (counter == 1) {
                if (isShort == true) {
                    shortTrailerNr1.body2.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 40 + 2).value = color;
                    document.getElementById("color" + 40 + 2).value = name;
                    document.getElementById("color" + 40 + 2).style.background = "#" + color;

                    shortTrailerNr1.body3.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 50 + 2).value = color;
                    document.getElementById("color" + 50 + 2).value = name;
                    document.getElementById("color" + 50 + 2).style.background = "#" + color;
                }
            } else if (counter == 2) {
                if (isShort == true) {
                    shortTrailerNr2.body2.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 40 + 3).value = color;
                    document.getElementById("color" + 40 + 3).value = name;
                    document.getElementById("color" + 40 + 3).style.background = "#" + color;
                    shortTrailerNr1.body2.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 40 + 2).value = color;
                    document.getElementById("color" + 40 + 2).value = name;
                    document.getElementById("color" + 40 + 2).style.background = "#" + color;

                    shortTrailerNr1.body3.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 50 + 2).value = color;
                    document.getElementById("color" + 50 + 2).value = name;
                    document.getElementById("color" + 50 + 2).style.background = "#" + color;
                    shortTrailerNr2.body3.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 50 + 3).value = color;
                    document.getElementById("color" + 50 + 3).value = name;
                    document.getElementById("color" + 50 + 3).style.background = "#" + color;
                }
            } else if (counter == 3) {
                if (isShort == true) {
                    shortTrailerNr2.body2.forEach(part => part.setHex(hex));
                    shortTrailerNr3.body2.forEach(part => part.setHex(hex));
                    shortTrailerNr1.body2.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 40 + 2).value = color;
                    document.getElementById("color" + 40 + 2).value = name;
                    document.getElementById("color" + 40 + 2).style.background = "#" + color;
                    document.getElementById("colorChoosen" + 40 + 3).value = color;
                    document.getElementById("color" + 40 + 3).value = name;
                    document.getElementById("color" + 40 + 3).style.background = "#" + color;
                    document.getElementById("colorChoosen" + 40 + 4).value = color;
                    document.getElementById("color" + 40 + 4).value = name;
                    document.getElementById("color" + 40 + 4).style.background = "#" + color;

                    shortTrailerNr1.body3.forEach(part => part.setHex(hex));
                    shortTrailerNr2.body3.forEach(part => part.setHex(hex));
                    shortTrailerNr3.body3.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 50 + 2).value = color;
                    document.getElementById("color" + 50 + 2).value = name;
                    document.getElementById("color" + 50 + 2).style.background = "#" + color;
                    document.getElementById("colorChoosen" + 50 + 3).value = color;
                    document.getElementById("color" + 50 + 3).value = name;
                    document.getElementById("color" + 50 + 3).style.background = "#" + color;
                    document.getElementById("colorChoosen" + 50 + 4).value = color;
                    document.getElementById("color" + 50 + 4).value = name;
                    document.getElementById("color" + 50 + 4).style.background = "#" + color;
                }
            }

            if (counter3 == 4) {
                if (isLong == true) {
                    longTrailerNr1.body4.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 40 + 5).value = color;
                    document.getElementById("color" + 40 + 5).value = name;
                    document.getElementById("color" + 40 + 5).style.background = "#" + color;
                    longTrailerNr1.body3.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 50 + 5).value = color;
                    document.getElementById("color" + 50 + 5).value = name;
                    document.getElementById("color" + 50 + 5).style.background = "#" + color;
                }

            } else if (counter3 == 5) {
                if (isLong == true) {
                    longTrailerNr1.body4.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 40 + 5).value = color;
                    document.getElementById("color" + 40 + 5).value = name;
                    document.getElementById("color" + 40 + 5).style.background = "#" + color;
                    longTrailerNr1.body3.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 50 + 5).value = color;
                    document.getElementById("color" + 50 + 5).value = name;
                    document.getElementById("color" + 50 + 5).style.background = "#" + color;
                    longTrailerNr2.body4.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 40 + 6).value = color;
                    document.getElementById("color" + 40 + 6).value = name;
                    document.getElementById("color" + 40 + 6).style.background = "#" + color;
                    longTrailerNr2.body3.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 50 + 6).value = color;
                    document.getElementById("color" + 50 + 6).value = name;
                    document.getElementById("color" + 50 + 6).style.background = "#" + color;
                }
            }
        }
        if (nr == 2) {
            shortTrailerNr1.body1.forEach(part => part.setHex(hex));

            if (counter == 2) {
                shortTrailerNr2.body1.forEach(part => part.setHex(hex));
                document.getElementById("colorChoosen" + num + 3).value = color;
                document.getElementById("color" + num + 3).value = name;
                document.getElementById("color" + num + 3).style.background = "#" + color;
            } else if (counter == 3) {
                shortTrailerNr2.body1.forEach(part => part.setHex(hex));
                shortTrailerNr3.body1.forEach(part => part.setHex(hex));
                document.getElementById("colorChoosen" + num + 3).value = color;
                document.getElementById("color" + num + 3).value = name;
                document.getElementById("color" + num + 3).style.background = "#" + color;
                document.getElementById("colorChoosen" + num + 4).value = color;
                document.getElementById("color" + num + 4).value = name;
                document.getElementById("color" + num + 4).style.background = "#" + color;
            }
        }

        if (nr == 3) {
            shortTrailerNr2.body1.forEach(part => part.setHex(hex));
        }

        if (nr == 4) {
            shortTrailerNr3.body1.forEach(part => part.setHex(hex));
        }

        if (nr == 5) {
            longTrailerNr1.body.forEach(part => part.setHex(hex));

            if (counter3 == 5) {
                longTrailerNr2.body.forEach(part => part.setHex(hex));

                document.getElementById("colorChoosen" + num + 6).value = color;
                document.getElementById("color" + num + 6).value = name;
                document.getElementById("color" + num + 6).style.background = "#" + color;
            }
        }

        if (nr == 6) {
            longTrailerNr2.body.forEach(part => part.setHex(hex));
        }
    }

    if (num == 40) {
        if (nr == 1) {
            loko.body3.forEach(part => part.setHex(hex));
            if (isShort == true) {
                if (counter == 1) {
                    shortTrailerNr1.body.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 20 + 2).value = color;
                    document.getElementById("color" + 20 + 2).value = name;
                    document.getElementById("color" + 20 + 2).style.background = "#" + color;
                } else if (counter == 2) {
                    shortTrailerNr2.body.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 20 + 3).value = color;
                    document.getElementById("color" + 20 + 3).value = name;
                    document.getElementById("color" + 20 + 3).style.background = "#" + color;
                    shortTrailerNr1.body.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 20 + 2).value = color;
                    document.getElementById("color" + 20 + 2).value = name;
                    document.getElementById("color" + 20 + 2).style.background = "#" + color;
                } else if (counter == 3) {
                    shortTrailerNr2.body.forEach(part => part.setHex(hex));
                    shortTrailerNr3.body.forEach(part => part.setHex(hex));
                    shortTrailerNr1.body.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 20 + 2).value = color;
                    document.getElementById("color" + 20 + 2).value = name;
                    document.getElementById("color" + 20 + 2).style.background = "#" + color;
                    document.getElementById("colorChoosen" + 20 + 3).value = color;
                    document.getElementById("color" + 20 + 3).value = name;
                    document.getElementById("color" + 20 + 3).style.background = "#" + color;
                    document.getElementById("colorChoosen" + 20 + 4).value = color;
                    document.getElementById("color" + 20 + 4).value = name;
                    document.getElementById("color" + 20 + 4).style.background = "#" + color;
                }
            }

            if (counter3 == 4) {
                if (isLong == true) {
                    longTrailerNr1.body5.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 20 + 5).value = color;
                    document.getElementById("color" + 20 + 5).value = name;
                    document.getElementById("color" + 20 + 5).style.background = "#" + color;
                }

            } else if (counter3 == 5) {
                if (isLong == true) {
                    longTrailerNr1.body5.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 20 + 5).value = color;
                    document.getElementById("color" + 20 + 5).value = name;
                    document.getElementById("color" + 20 + 5).style.background = "#" + color;
                    longTrailerNr2.body5.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + 20 + 6).value = color;
                    document.getElementById("color" + 20 + 6).value = name;
                    document.getElementById("color" + 20 + 6).style.background = "#" + color;
                }
            }
        }

        if (nr == 2) {
            shortTrailerNr1.body2.forEach(part => part.setHex(hex));

            if (counter == 2) {
                shortTrailerNr2.body2.forEach(part => part.setHex(hex));
                document.getElementById("colorChoosen" + num + 3).value = color;
                document.getElementById("color" + num + 3).value = name;
                document.getElementById("color" + num + 3).style.background = "#" + color;
            } else if (counter == 3) {
                shortTrailerNr2.body2.forEach(part => part.setHex(hex));
                shortTrailerNr3.body2.forEach(part => part.setHex(hex));
                document.getElementById("colorChoosen" + num + 3).value = color;
                document.getElementById("color" + num + 3).value = name;
                document.getElementById("color" + num + 3).style.background = "#" + color;
                document.getElementById("colorChoosen" + num + 4).value = color;
                document.getElementById("color" + num + 4).value = name;
                document.getElementById("color" + num + 4).style.background = "#" + color;
            }
        }

        if (nr == 3) {
            shortTrailerNr2.body2.forEach(part => part.setHex(hex));
        }

        if (nr == 4) {
            shortTrailerNr3.body2.forEach(part => part.setHex(hex));
        }

        if (nr == 5) {
            longTrailerNr1.body4.forEach(part => part.setHex(hex));

            if (counter3 == 5) {
                longTrailerNr2.body4.forEach(part => part.setHex(hex));

                document.getElementById("colorChoosen" + num + 6).value = color;
                document.getElementById("color" + num + 6).value = name;
                document.getElementById("color" + num + 6).style.background = "#" + color;
            }
        }

        if (nr == 6) {
            longTrailerNr2.body4.forEach(part => part.setHex(hex));

        }
    }

    if (num == 50) {
        if (nr == 1) {
            loko.body3.forEach(part => part.setHex(hex));
        }
        if (nr == 2) {
            shortTrailerNr1.body3.forEach(part => part.setHex(hex));
            if (isShort == true) {
                if (counter == 2) {
                    shortTrailerNr2.body3.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + num + 3).value = color;
                    document.getElementById("color" + num + 3).value = name;
                    document.getElementById("color" + num + 3).style.background = "#" + color;
                } else if (counter == 3) {
                    shortTrailerNr2.body3.forEach(part => part.setHex(hex));
                    shortTrailerNr3.body3.forEach(part => part.setHex(hex));
                    document.getElementById("colorChoosen" + num + 3).value = color;
                    document.getElementById("color" + num + 3).value = name;
                    document.getElementById("color" + num + 3).style.background = "#" + color;
                    document.getElementById("colorChoosen" + num + 4).value = color;
                    document.getElementById("color" + num + 4).value = name;
                    document.getElementById("color" + num + 4).style.background = "#" + color;
                }
            }
        }

        if (nr == 3) {
            shortTrailerNr2.body3.forEach(part => part.setHex(hex));
        }

        if (nr == 4) {
            shortTrailerNr3.body3.forEach(part => part.setHex(hex));
        }

        if (nr == 5) {
            longTrailerNr1.body3.forEach(part => part.setHex(hex));

            if (counter3 == 5) {
                longTrailerNr2.body3.forEach(part => part.setHex(hex));
                document.getElementById("colorChoosen" + num + 6).value = color;
                document.getElementById("color" + num + 6).value = name;
                document.getElementById("color" + num + 6).style.background = "#" + color;
            }
        }

        if (nr == 6) {
            longTrailerNr2.body3.forEach(part => part.setHex(hex));
        }
    }
}
