var oForm = EbS.get('memo', true);
oForm.ETL = {"H": '1', "N": '2', "L": '3'};
function HGF(sElem1, sElem2) {
    return (sElem1 || '').toLowerCase() == (sElem2 || '').toLowerCase();
}
function FYU(Edk) {
    var EcK = AAA.EcK;
    if (typeof(Edk.BoB) == 'undefined' || !EcK.getElementById('e-' + this.sId + '-editorarea')) return;
    if (/\-recipients\-height$/.test(Edk.sName)) {
        EcK.getElementById('e-' + this.sId + '-mailinfo-container').style.top = Edk.BoB + 'px';
        EcK.getElementById('e-' + this.sId + '-editorarea').style.paddingTop = Edk.BoB + EcK.getElementById('e-' + this.sId + '-mailinfo').offsetHeight + EcK.getElementById('e-' + this.sId + '-body-commands').offsetHeight + 'px';
        EcK.getElementById('e-' + this.sId + '-body-commands').style.top = Edk.BoB + EcK.getElementById('e-' + this.sId + '-mailinfo').offsetHeight + 'px';
    }
    if (/\-mailinfo\-height$/.test(Edk.sName)) {
        EcK.getElementById('e-' + this.sId + '-editorarea').style.paddingTop = Edk.BoB + EcK.getElementById('e-' + this.sId + '-recipients').scrollHeight + EcK.getElementById('e-' + this.sId + '-body-commands').offsetHeight + 'px';
        EcK.getElementById('e-' + this.sId + '-body-commands').style.top = Edk.BoB + EcK.getElementById('e-' + this.sId + '-recipients').scrollHeight + 'px';
    }
    if (/\-attachmentsarea\-mode$/.test(Edk.sName)) {
        if (Edk.BoB == 2) {
            var oElem = EcK.getElementById('e-' + this.sId + '-attachmentsarea');
            var cl = oElem ? oElem.getAttribute('com_ibm_dwa_ui_widget_class') : '';
            if (oElem && cl) {
                var Edp = EKc.prototype.EYl[oElem.id + ':' + cl];
                if (!Edp) EPl(oElem, true);
            }
        }
        EJQ(EcK.getElementById('e-' + this.sId + '-bottompanel'), 's-nodisplay', Edk.BoB == 0);
        var Fdt = {0: '4px', 1: '1.6em', 2: '7.95em', 3: '7.95em', 4: '7.95em', 5: '9.7em'};
        EcK.getElementById('e-' + this.sId + '-editorarea').style.paddingBottom = Fdt[Edk.BoB];
        EcK.getElementById('e-' + this.sId + '-bottompanel').style.height = Fdt[Edk.BoB];
        if (AAA.dispatchTestEvent) AAA.dispatchTestEvent('attachmentinitialized', this.sId, Edk.BoB);
    }
    if (Edk.sName == 'p-body-height' || Edk.sName == 'p-body-width') this.FPW(++this.GUl);
}
function Ezq() {
    for (var s in{"mailinfo-height": void 0, "attachmentsarea-mode": void 0})
        EPx.get('p-e-' + this.sId + '-' + s).detach(this);
    for (var s in{sendto: void 0, copyto: void 0, blindcopyto: void 0}) ENR.get(AAA.EcK.getElementById('e-' + this.sId + '-' + s)).release();
    EPx.get('p-body-height').detach(this);
}
function God() {
    var EcK = AAA.EcK;
    var HLq = AAA.EcK.getElementById('e-' + this.sId + '-recipients');
    HLq.style.height = HLq.getElementsByTagName('table')[0].offsetHeight + 'px';
    EcK.getElementById('e-' + this.sId + '-mailinfo-container').style.top = EcK.getElementById('e-' + this.sId + '-recipients').scrollHeight + 'px';
    EcK.getElementById('e-' + this.sId + '-editorarea').style.paddingTop = EcK.getElementById('e-' + this.sId + '-mailinfo-container').offsetHeight + EcK.getElementById('e-' + this.sId + '-recipients').scrollHeight + EcK.getElementById('e-' + this.sId + '-body-commands').offsetHeight + 'px';
    EcK.getElementById('e-' + this.sId + '-body-commands').style.top = EcK.getElementById('e-' + this.sId + '-mailinfo-container').offsetHeight + EcK.getElementById('e-' + this.sId + '-recipients').scrollHeight + 'px';
}
function Fkp(nSeq) {
    if (this.GUl > nSeq) return;
    var EcK = AAA.EcK;
    var oElem = EcK.getElementById('e-' + this.sId + '-form-content');
    var Fgu = EcK.getElementById('e-' + this.sId + '-form-content-outer');
    if (oElem.offsetHeight < 380) {
        oElem.style.height = 380 + 'px';
        Fgu.style.overflow = "auto";
    } else if (Fgu.clientHeight >= 380) oElem.style.height = "";
    var HLq = AAA.EcK.getElementById('e-' + this.sId + '-recipients');
    var Br = HLq.offsetHeight;
    EcK.getElementById('e-' + this.sId + '-mailinfo-container').style.top = Br + 'px';
    EcK.getElementById('e-' + this.sId + '-editorarea').style.paddingTop = Br + EcK.getElementById('e-' + this.sId + '-mailinfo').offsetHeight + EcK.getElementById('e-' + this.sId + '-body-commands').offsetHeight + 'px';
    EcK.getElementById('e-' + this.sId + '-body-commands').style.top = Br + EcK.getElementById('e-' + this.sId + '-mailinfo').offsetHeight + 'px';
}
oForm.initToolbar = function Exw(Blr, EyI) {
    var oNote = Blr.oNote;
    if (!haiku.EDZ && (haiku.EnableEncryptMail == "1" || haiku.EnableSignMail == "1" || oNote.EHA('Encrypt', 0) == '1' || oNote.fSSLSwitchNeeded || (Blr.EWX && oNote.EEr && (oNote.EEr.EHA('Encrypt', 0) == '1' || oNote.EEr.fSSLSwitchNeeded)))) return;
    var ESl = ("https:" == window.location.protocol.toLowerCase());
    var ELi = (!ESl && AAA.FWz.EUQ[40] != 1);
    if (oNote.fSSLSwitchNeeded || (oNote.EEr && oNote.EEr.fSSLSwitchNeeded) || (Blr.GRP && ELi)) return;
    var FHa = AAA.FWz.FHa && !oNote.fVoiceMemo;
    var EWF = [ 'IT|new|' + <dwa:string id="L_ACTION_NEW_MAILMEMO_TITLE"/> + '|16 16 180 40:' + <dwa:string id="L_ACTION_NEW"/> + '|Ecl|e-dropdown-new-mailedit', 'T|send$bold|' + <dwa:string id="L_MAILMEMO_SEND"/> + '|' + <dwa:string id="L_MAILMEMO_SEND"/> + '|' + (FHa ? 'EyT' : 'EbK') + '{sAction: \'a-send\'}|', 'T|sendandfile|' + <dwa:string id="L_MAILMEMO_SENDANDFILE"/> + '|' + <dwa:string id="L_MAILMEMO_SENDANDFILE"/> + '|' + (FHa ? 'EyT' : 'EbK') + '{sAction: \'a-sendandfile\'}|', 'T|saveasdraft|' + <dwa:string id="L_MAILMEMO_SAVEASDRAFT"/> + '|' + <dwa:string id="L_MAILMEMO_SAVEASDRAFT"/> + '|EbK{sAction: \'a-saveasdraft\'}|', 'T|options|' + <dwa:string id="L_ACTION_OPTIONS"/> + '|' + <dwa:string id="L_ACTION_OPTIONS"/> + '|EZa{fnSync: function(){event.cancelBubble=true;}}|', 'I|followup|' + <dwa:string id="L_ACTION_FOLLOWUP_QUICK"/> + '|16 16 140 40|EZS{sAction: \'a-quickfollowup\'}|e-dropdown-followup-mailedit', 'I|attach|' + <dwa:string id="L_ACTION_ATTACHFILE"/> + '|17 16 173 63|Esh|', 'T|more|' + <dwa:string id="L_ACTION_MOREACTIONS"/> + '|' + <dwa:string id="L_ACTION_MOREACTIONS"/> + '||e-dropdown-more-mailedit' ];
    if (!AAA.FGG) {
        if (!haiku.BXw && !Blr.oNote.fVoiceMemo) {
            EWF.splice(7, 0, 'T|format|' + <dwa:string id="L_ACTION_FORMAT"/> + '|' + <dwa:string id="L_ACTION_FORMAT"/> + '||e-dropdown-format-mailedit');
        }
        EWF.splice(7 + (!haiku.BXw - 0), 0, 'T|display|' + <dwa:string id="L_ACTION_DISPLAY"/> + '|' + <dwa:string id="L_ACTION_DISPLAY"/> + '||e-dropdown-display-mailedit');
        EWF.splice(8 + (!haiku.BXw - 0), 0, 'I|print|' + <dwa:string id="L_ACTION_PRINT"/> + '|16 16 100 0|Efr{EDt: true}|');
    }
    if (haiku.Fcg || (AAA.FGG && (AAA.FWz.EUQ[60] - 0) && (AAA.FWz.EUQ[66] - 0))) EWF.splice(6, 1);
    EKc.prototype.EQj['EZa'] = ['MiscStdEdit'];
    EKc.prototype.EQj['GrF'] = ['CustomExpDate'];
    var Gws = [].concat(EWF);
    Gws.splice(1, 3, 'T|saveandclose|' + <dwa:string id="L_ACTION_SAVECLOSE"/> + '|' + <dwa:string id="L_ACTION_SAVECLOSE"/> + '|EbK{sAction: \'a-saveandclose\'}|');
    var GnB = [].concat(EWF);
    GnB.splice(1, 3, 'T|FrD|' + <dwa:string id="L_MOUSEOVER_STATIONERY_RENAME_TEXT"/> + '|' + <dwa:string id="L_ACTION_RENAME_STATIONERY"/> + '|GAp{bFromForm: true}|', 'T|saveclose|' + <dwa:string id="L_ACTION_SAVECLOSE"/> + '|' + <dwa:string id="L_ACTION_SAVECLOSE"/> + '|GnX|');
    GnB.splice(4, 1);
    GnB[GnB.length - 1] = GnB[GnB.length - 1].replace('e-dropdown-more-mailedit', 'e-dropdown-more-maileditstationery');
    if (!AAA.FGG && /^a\-(edit|new)stationery$/.test(Blr.EWX)) {
        EKc.prototype.EQj['GAp'] = EKc.prototype.EQj['GnX'] = ['Base', 'Dialog', 'FullMailViewAction'];
    }
    if (AAA.FGG) EWF.splice(2, 1); else EKc.prototype.EQj['EsC'] = ['Base', 'Common', 'Dialog', 'MiscWidgets', 'FullMailPageMoveCopy', 'FullUnidOperations'];
    var GOc = !AAA.GLp.fUsed || AAA.GLp.oShowState["sb"];
    var Ens = [ ];
    if (GOc) Ens.push('IT|show|' + <dwa:string id="L_ACTION_SHOWSIDEBAR_HOVER"/> + '|16 13 34 107:' + <dwa:string id="L_ACTION_VIEW"/> + '|EcV{sAction: \'toggle\'}|e-dropdown-show-document');
    var EsA = [ 'I|previous|' + <dwa:string id="L_MOUSEOVER_PREV" quotes="single"/> + '|16 16 40 0|ETR{sNavigation: \'Prev\'}|', 'I|next|' + <dwa:string id="L_MOUSEOVER_NEXT" quotes="single"/> + '|16 16 60 0|ETR{sNavigation: \'Next\'}|' ];
    if (GOc) EsA.push('IT|show|' + <dwa:string id="L_ACTION_SHOWSIDEBAR_HOVER"/> + '|16 13 34 107:' + <dwa:string id="L_ACTION_VIEW"/> + '|EcV{sAction: \'toggle\'}|e-dropdown-show-document');
    if (AAA.s_DocumentForm - 0) {
        Ens = [];
        EsA = [];
    }
    if (AAA.FWz.LLN2) {
        var HMo = EWF.shift();
        Ens.splice(0, 0, HMo);
        EsA.splice(0, 0, HMo);
        Gws.shift();
        GnB.shift();
    }
    var EcK = AAA.EcK;
    var Esq = 'e-actions-mailedit' + (!AAA.FGG && /^a\-(edit|new)stationery$/.test(Blr.EWX) ? 'stationery' : Blr.oNote.sUnid != '$new' ? Blr.oNote.EHA('POSTEDDATE', 0) && oNote.EHA('From') != haiku.Kq ? 'received' : 'draft' : '');
    if (!EcK.getElementById(Esq)) {
        var oMap = {mailedit: [EWF, Ens], maileditdraft: [EWF, EsA], maileditreceived: [Gws, EsA], maileditstationery: [GnB, Ens]};
        var Czm = [];
        for (var s in oMap) Czm[Czm.length] = '<div id="e-actions-' + s + '" class="s-stack s-hidden" com_ibm_dwa_ui_widget_class="EHB" com_ibm_dwa_ui_toolbar_leftitems="|' + oMap[s][0].join('|') + '"' + (oMap[s][1].length > 0 ? (' com_ibm_dwa_ui_toolbar_rightitems="|' + oMap[s][1].join('|') + '"') : '') + ' com_ibm_dwa_ui_dropdownMenu_manager="root" com_ibm_dwa_ui_toolbar_dropdownIndicator="' + <dwa:property id="D_SPRITE_DROPDOWNINDICATOR" includeif='@IsError(s_ModeNameParts[11]) | s_ModeNameParts[11]=""' /> < dwa
    :
        property
        id = "D_SPRITE_DROPDOWNINDICATOR_BH"
        includeif = 's_ModeNameParts[11] != ""' / > +'" com_ibm_dwa_ui_toolbar_overflowIndicator="' + <dwa:property id="D_SPRITE_OVERFLOWINDICATOR" includeif='@IsError(s_ModeNameParts[11]) | s_ModeNameParts[11]=""' /> < dwa
    :
        property
        id = "D_SPRITE_OVERFLOWINDICATOR_BH"
        includeif = 's_ModeNameParts[11] != ""' / > +'" com_ibm_dwa_ui_toolbar_consolidatedIcons="' + AAA.BYp(<dwa:string id="D_BASICICONS_GIF" includeif='@IsError(s_ModeNameParts[11]) | s_ModeNameParts[11]=""' /> < dwa
    :
        string
        id = "D_BASICICONS_BH_PNG"
        includeif = 's_ModeNameParts[11] != ""' / >
    )
        +'" com_ibm_dwa_misc_observes_tabid="p-e-panelmanager-currentselected"></div>';
        var oElem = EcK.getElementById(EyI);
        oElem.insertAdjacentHTML('beforeEnd', Czm.join(''));
        EPl(oElem);
        function HBK() {
            if (!EKc.prototype.EYl[this.sId + ':Ebx']) {
                var oElem = AAA.EcK.getElementById(this.sId);
                oElem.setAttribute('com_ibm_dwa_ui_widget_class', oElem.getAttribute('com_ibm_dwa_ui_widget_class') + ' Ebx');
                EPl(oElem);
            }
        }

        for (var s in oMap) {
            var Edp = EKc.prototype.EYl['e-actions-' + s + ':EHB'];
            if (Edp) Edp.onActivated = HBK.EHq(Edp);
        }
    }
    var EMw = EcK.getElementById(Esq);
    var sTabs = EMw.getAttribute('com_ibm_dwa_ui_tabpanel_tabs');
    EMw.setAttribute('com_ibm_dwa_ui_tabpanel_tabs', (sTabs ? sTabs.split(' ') : []).concat([Blr.sId]).join(' '));
};
oForm.init = function FLq(Blr) {
    var EcK = AAA.EcK;
    var oNote = Blr.oNote;
    var oForm = EcK.getElementById('e-pageui-' + Blr.sId);
    if (Blr.EWX && (/^a-(reply|replyall)(history|withinternetstyle|withoutattach)(voice)?$/.test(Blr.EWX) || /^a-forward.*$/.test(Blr.EWX) || /^a-(copyintonewmessage)$/.test(Blr.EWX)) && oNote.EEr && Form_memo_is_private_doc(oNote, Blr.HGX)) {
        alert(<dwa:string id="L_ALERT_KEEPPRIVATE"/>);
        Blr.Gjc = true;
        var Ebj = AAA.Fkb();
        setTimeout(Ebj.ELn.EHq(Ebj, Blr.sId), 200);
        return;
    }
    if (!haiku.EDZ && (haiku.EnableEncryptMail == "1" || haiku.EnableSignMail == "1" || oNote.EHA('Encrypt', 0) == '1' || oNote.fSSLSwitchNeeded || (Blr.EWX && oNote.EEr && (oNote.EEr.EHA('Encrypt', 0) == '1' || oNote.EEr.fSSLSwitchNeeded)))) {
        var EoV = 'e-form-warning-' + Blr.sId;
        var GNA = '<div class="s-basicpanel s-panel-border" style="padding:1em 0.7em"><div class="s-balloon-body s-panel-border" style="padding:1em 1.3em;width:36em;"><div class="s-warning" style="padding-bottom:2em;">' + <dwa:string id="L_WARNING_NOT_SUPPORT_IN_LIGHT_VERSION"/> + '</div><div style="text-align:right"><input class="s-basic-buttons" type="button" id="' + EoV + '-open" value="' + <dwa:string id="L_ACTION_OPEN_STANDARD_VERSION"/> + '" style="margin:0px 5px" onclick="AAA.DSq.ELU(event, this.id,' + (oNote.sUnid != '$new' ? ' \'Edo\'' : ' \'EpY\'') + (Blr.EWX && oNote.EEr ? (',{sAction: \'' + Blr.EWX + '\', FcG: \'' + oNote.EEr.sUnid + '\'}') : '') + ')"><input class="s-basic-buttons" type="button" id="' + EoV + '-cancel" value="' + <dwa:string id="L_CANCEL"/> + '"'
            + ' onclick="AAA.DSq.ELU(event, this.id, \'EQD\')"></div></div></div>';
        var EgU = EcK.getElementById('e-form-' + Blr.sId);
        for (var BRg = EgU.getElementsByTagName('*'), i = 0; i < BRg.length; i++) EXN(BRg[i]);
        EgU.innerHTML = GNA;
        return;
    }
    var ESl = ("https:" == window.location.protocol.toLowerCase());
    var ELi = (!ESl && AAA.FWz.EUQ[40] != 1);
    if (oNote.fSSLSwitchNeeded || (oNote.EEr && oNote.EEr.fSSLSwitchNeeded) || (Blr.GRP && ELi)) {
        var EoV = 'e-form-warning-' + Blr.sId;
        var FeQ = AAA.FWz.ERg == "0" && AAA.FWz.EUQ[40] != 1;
        var EDh = 'AAA.DSq.ELU(event, this.id,';
        if (oNote.sUnid != '$new') {
            EDh += ' \'EaJ\',{fSSLSwitch: true, fNewWindow: true, EDt: true})';
        } else {
            var sAction = Blr.EWX ? Blr.EWX : '';
            var FcG = oNote.EEr && oNote.EEr.sUnid ? oNote.EEr.sUnid : '';
            var HGX = Blr.HGX ? Blr.HGX : '';
            EDh += ' \'EPO\',{fSSLSwitch: true, fNewWindow: true, sAction: \'' + sAction + '\', FcG: \'' + FcG + '\', HGX: \'' + HGX + '\'})';
        }
        var sLabel = !sAction ? <dwa:string id="L_OPEN_MESSAGE_USING_SSL"/> : (sAction.match(/^a\-reply/) ? <dwa:string id="L_REPLY_USING_SSL"/> : (sAction.match(/^a\-forward/) ? <dwa:string id="L_FORWARD_USING_SSL"/> : <dwa:string id="L_OPEN_MESSAGE_USING_SSL"/>));
        var Fbl = '<input class="s-basic-buttons" type="button" id="' + EoV + '-open" value="' + sLabel + '" style="margin:0px 5px" onclick="' + EDh + '">';
        var sMsg = !sAction ? <dwa:string id="L_ENCRYPT_MSG3"/> : (sAction.match(/^a\-reply/) ? <dwa:string id="L_ENCRYPT_MSG_REPLY"/> : (sAction.match(/^a\-forward/) ? <dwa:string id="L_ENCRYPT_MSG_FORWARD"/> : <dwa:string id="L_ENCRYPT_MSG3"/>));
        var EgU = EcK.getElementById('e-form-' + Blr.sId);
        for (var BRg = EgU.getElementsByTagName('*'), i = 0; i < BRg.length; i++) EXN(BRg[i]);
        EgU.innerHTML = '<div class="s-basicpanel s-panel-border" style="padding:1em 0.7em"><div class="s-balloon-body s-panel-border" style="padding:1em 1.3em;width:36em;"><div class="s-warning" style="padding-bottom:2em;">' + (FeQ ? <dwa:string id="L_ENCRYPT_MSG5"/> : sMsg) + '</div><div style="text-align:right">' + (FeQ ? '' : Fbl) + '<input class="s-basic-buttons" type="button" id="' + EoV + '-cancel" value="' + <dwa:string id="L_ACTION_CLOSE"/> + '" onclick="AAA.DSq.ELU(event, this.id, \'EQD\')"></div></div></div>';
        return;
    }
    if (Blr.EWX == 'a-newstationery') {
        oForm.s_IsStationery.value = oNote.EHA('s_IsStationery', 0) || '';
    }
    oForm.IsMailStationery.value = oNote.EHA('IsMailStationery', 0) || '';
    oForm.MailStationeryName.value = oNote.EHA('MailStationeryName', 0) || '';
    if (oForm.IsMailStationery.value) {
        EJQ(EcK.getElementById('e-' + Blr.sId + '-stationery'), 's-nodisplay', false);
        EVF(EcK.getElementById('e-' + Blr.sId + '-stationeryname'), oNote.EHA('MailStationeryName', 0) || <dwa:string id="L_STATIONERY_UNTITLED"/>);
    }
    for (var BRg = EcK.getElementById('e-form-' + Blr.sId).getElementsByTagName('*'), i = 0; i < BRg.length; i++) EcJ(BRg[i]);
    EPx.get('p-e-' + Blr.sId + '-mailinfo-height').attach(Blr);
    var HLq = AAA.EcK.getElementById('e-' + Blr.sId + '-recipients');
    var HIo = EPx.get('p-e-' + Blr.sId + '-recipients-height');
    HIo.attach(Blr);
    HIo.BRW(EcK.getElementById('e-' + Blr.sId + '-recipients').scrollHeight);
    EPx.get('p-body-height').attach(Blr);
    EPx.get('p-body-width').attach(Blr);
    Blr.EYK = FYU;
    Blr.release = Ezq;
    Blr.toggleMailDisplay = God;
    Blr.FPW = Fkp;
    Boy.load();
    var Fkm = ['-blindcopyto-container', '-additionalinfo-container', '-from-container'];
    var HGT = ['HNf', 'HLW', 'HLF'];
    var HKV = ['SB', 'SO', 'SF'];
    for (var i = 0; i < Fkm.length; i++) {
        oElem = AAA.EcK.getElementById('e-' + Blr.sId + Fkm[i]);
        EJQ(oElem, 's-nodisplay', !((Boy[HKV[i]] || '') != '' ? Boy[HKV[i]] != '0' : AAA.FWz[HGT[i]]));
    }
    Blr.toggleMailDisplay();
    Blr.FPW(Blr.GUl = 0);
    if (Blr.oNote.fVoiceMemo) {
        setTimeout(this.Gbd.EHq(this, Blr), 0);
        var EJs = {EXz: Blr.sId, sUnid: oNote.sUnid, HBz: Blr.EWX.match(/(historyvoice|forwardvoice)$/)};
        EKc.prototype.EQj["GwH"] = ['VoiceMemo'];
        ELU(null, Blr.sId, 'GwH', EJs);
        Blr.sEditorInUse = 'bodyplain';
    } else setTimeout(this.ENB.EHq(this, Blr), 0);
    var EMc = EcK.getElementById('e-' + Blr.sId + '-sendto');
    var EIA = EcK.getElementById('e-' + Blr.sId + '-copyto');
    var EWL = EcK.getElementById('e-' + Blr.sId + '-blindcopyto');
    EMc.Esa = this.Esa.EHq(this, 'e-' + Blr.sId + '-sendto');
    EIA.Esa = this.Esa.EHq(this, 'e-' + Blr.sId + '-copyto');
    EWL.Esa = this.Esa.EHq(this, 'e-' + Blr.sId + '-blindcopyto');
    if (oNote.sUnid != '$new' || (Blr.Bip && !Blr.EWX) || Blr.EWX == 'a-newmailwithstationery') {
        if (haiku.EDZ && haiku.EMZ) oForm.Sign.value = oNote.EHA('Sign', 0);
        if (oNote.sUnid == '$new' && Blr.Bip.CaQ.DoesGetRecipientsFromOpener == '1') {
            oNote = new Ecw(Blr.EZN.oNote.sUnid, Blr.EZN.oNote.DWf);
            oNote.DXX = Blr.EZN.oNote.DXX;
            oNote.ByT = Blr.EZN.oNote.ByT;
        } else if (Blr.EWX == 'a-newmailwithstationery') {
            oNote = Blr.oNote.EEr;
        }
        var EqT = [
            [EMc, 'EnterSendTo', 'SendTo', 'RequiredAttendees', 'AssignedTo'],
            [EIA, 'EnterCopyTo', 'Copyto', 'OptionalAttendees', 'OptionalAssignedTo'],
            [EWL, 'EnterBlindCopyTo', 'BlindCopyTo', 'FYIAttendees', 'FYIAssignedTo']
        ];
        for (var i = 0; i < EqT.length; i++) {
            for (var j = 1; j < EqT[i].length; j++) {
                if (oNote.EHA(EqT[i][j], 0)) {
                    var EYb = (new EXH).EFm(oNote, EqT[i][j]);
                    EqT[i][0].value = EYb.ETP().join(', ');
                    break;
                }
            }
        }
        EcK.getElementById('e-' + Blr.sId + '-highpriority').checked = oNote.EHA('Importance') == '1' && oNote.EHA('DeliveryPriority') == "H";
        EcK.getElementById('e-' + Blr.sId + '-returnreceipt').checked = oNote.EHA('ReturnReceipt') == '1';
        var EHS = oNote.EHA('Subject');
        var fg = EHS instanceof Array ? EHS.join('') : EHS;
        EcK.getElementById('e-' + Blr.sId + '-subject').value = fg;
        if (!AAA.FGG) EcK.getElementById('e-' + Blr.sId + '-keepprivate').checked = oNote.EHA('x_KeepPrivate') == '1';
        oForm.ReturnReceipt.value = oNote.EHA('ReturnReceipt');
        oForm.DeliveryPriority.value = oNote.EHA('DeliveryPriority') || 'N';
        oForm.DeliveryReport.value = oNote.EHA('DeliveryReport') || 'B';
        oForm.Importance.value = this.ETL[oForm.DeliveryPriority.value];
        oForm.h_ImageCount.value = oNote.EHA('h_ImageCount');
        if (!AAA.FGG) oForm.$KeepPrivate.value = oNote.EHA('x_KeepPrivate');
        if (haiku.EDZ && haiku.EYv) oForm.Encrypt.value = oNote.EHA('Encrypt', 0);
    } else if (oNote.EEr) {
        var EEr = oNote.EEr;
        var EVm = (new EXH).EFm(EEr, 'Principal', true);
        var oFrom = (new EXH).EFm(EEr, 'From', true);
        var EZs = (new EXH).EFm(EEr, 'ReplyTo', true);
        var EbL = EEr.EHA('FromDomain', 0);
        var sFrom = oFrom.EQm(0);
        var DOn = EVm.EQm(0);
        var Ecx = EZs.EQm(0);
        if (Blr.EWX.match(/^a\-reply/)) {
            var sWho = DOn ? DOn : sFrom ? sFrom : '';
            if (!AAA.FWz.HDc) {
                EMc.value = Ecx ? Ecx : sWho;
            } else {
                var HGd = ENR.get(EMc);
                var HIY = Ecx ? EZs : DOn ? EVm : sFrom ? oFrom : void 0;
                if (HIY) {
                    HGd.ETM[0] = HIY.ETM[0];
                    if (EbL) HGd.ETM[0].ESc.EMY = (HGd.ETM[0].ESc.EMY || []).concat(EbL.split("@"));
                    HGd.ESO = HIY.ESO;
                    HGd.ETM[0].fNotYetFetched = true;
                    EMc.value = HIY.EQm(0);
                }
            }
        }
        var ELS = Blr.EWX.match(/^a\-(replyall|copyintonewmessage)/);
        if (ELS) {
            var EIa = new EKq(new EPy(haiku.EUz), new EPy(haiku.EQs), new EPy(haiku.EFY), haiku.EMq);
            var EYb = new EXH([EIa]);
            var HBW = EEr.EHA('Form', 0).toLowerCase();
            var Gxo = '', sCcItem = '', sBccItem = '';
            switch (HBW) {
                case 'notice':
                case 'appointment':
                    Gxo = 'RequiredAttendees';
                    sCcItem = 'OptionalAttendees';
                    sBccItem = 'FYIAttendees';
                    break;
                case 'task':
                case 'tasknotice':
                    Gxo = 'AssignedTo';
                    sCcItem = 'OptionalAssignedTo';
                    sBccItem = 'FYIAssignedTo';
                    break;
                default:
                    Gxo = 'SendTo';
                    sCcItem = 'CopyTo';
                    sBccItem = 'BlindCopyTo';
                    break;
            }
            var EZP, oReplyBcc;
            if (ELS[1] == 'copyintonewmessage') {
                var Glg = new EXH;
                if (DOn || sFrom) {
                    Glg.EFm(EEr, DOn ? 'Principal' : 'From', true);
                }
                Glg.EFm(EEr, Gxo, true);
                Glg.EKw(EYb);
                if (!AAA.FWz.HDc) {
                    EMc.value = Glg.ETP().join(', ');
                } else {
                    var HGd = ENR.get(EMc);
                    HGd.ETM = Glg.ETM;
                    for (var i = 0; i < HGd.ETM.length; i++) {
                        if (EbL) var EMY = HGd.ETM[i].ESc.EMY = (HGd.ETM[i].ESc.EMY || []).concat(EbL.split("@")); else var EMY = HGd.ETM[i].ESc.EMY;
                        EMY && EMY.splice(1, EMY.length - 1);
                        HGd.ETM[i].fNotYetFetched = true;
                    }
                    HGd.ESO = Glg.ESO;
                    EMc.value = HGd.ETP().join(', ');
                }
                EZP = (new EXH).EFm(EEr, sCcItem, true);
                oReplyBcc = (new EXH).EFm(EEr, sBccItem, true);
            } else {
                EZP = (new EXH).EFm(EEr, Gxo, true).EFm(EEr, sCcItem, true);
            }
            EZP.unique().EKw(EYb);
            if (!AAA.FWz.HDc) {
                EIA.value = EZP.ETP().join(', ');
                if (ELS[1] == 'copyintonewmessage') EWL.value = oReplyBcc.ETP().join(', ');
            } else {
                var aRecipFields = [
                    {oFieldElem: EIA, HIY: EZP, EBI: true},
                    {oFieldElem: EWL, HIY: oReplyBcc, EBI: (ELS[1] == 'copyintonewmessage')}
                ];
                for (var k = 0; k < aRecipFields.length; k++) {
                    if (!aRecipFields[k].EBI) continue;
                    var EFJ = ENR.get(aRecipFields[k].oFieldElem);
                    EFJ.ETM = aRecipFields[k].HIY.ETM;
                    for (var i = 0; i < EFJ.ETM.length; i++) {
                        if (EbL) var EMY = EFJ.ETM[i].ESc.EMY = (EFJ.ETM[i].ESc.EMY || []).concat(EbL.split("@")); else var EMY = EFJ.ETM[i].ESc.EMY;
                        if (EMY && !AAA.FWz.HFx) {
                            EMY.splice(1, EMY.length - 1);
                        } else if (!EFJ.ETM[i].ESc.fInet && (EMY || [])[0]) {
                            if (EMY[0].toLowerCase() == AAA.FWz.HHr.toLowerCase()) {
                                EMY.splice(1, EMY.length - 1);
                            } else {
                                for (var j = 0; j < EMY.length - 1; j++) {
                                    var Qo = ESp(EMY.slice(j + 1).reverse(), EMY[j], HGF);
                                    Qo >= 0 && EMY.splice(j + 1, EMY.length - j - Qo - 1);
                                }
                            }
                        }
                        EFJ.ETM[i].fNotYetFetched = true;
                    }
                    EFJ.ESO = aRecipFields[k].HIY.ESO;
                    aRecipFields[k].oFieldElem.value = EFJ.ETP().join(', ');
                }
            }
            var EbJ = (new EXH).EFm(oNote.EEr, sBccItem, true);
            if (ELS[1] != 'copyintonewmessage' && ESp(EbJ && EbJ.ETM || [], EIa) >= 0) {
                if (!confirm(<dwa:string id="L_CONFIRM_DELETE_CC_FIELD"/>)) EcK.getElementById('e-' + Blr.sId + '-copyto').value = '';
                this.ENr(Blr);
            }
        }
        var BPh = Blr.EWX == 'a-copyintonewmessage' ? '' : (Blr.EWX.match(/^a\-reply/) ? (<dwa:string id="L_RE"/>).replace(/^\s\s*/, '').replace(/\s*\s$/, '') : (<dwa:string id="L_FW"/>).replace(/^\s\s*/, '').replace(/\s*\s$/, '')) + ' ';
        var EDR = Blr.EWX.match(/^a\-reply/) ? <dwa:string id="L_RE_SHORT_UPPERCASE"/> : <dwa:string id="L_FW_SHORT_UPPERCASE"/>;
        var HDN = (Blr.EWX.match(/^a\-reply/)) ? EEr.EHA("In_Reply_To") : EEr.EHA("ForwardedFrom");
        var EHS = EEr.EHA('Subject');
        var fg = EHS instanceof Array ? EHS.join('') : (EHS ? EHS : '' );
        fg = fg.replace(/\r\n/g, ' ').replace(/\n/g, ' ');
        EcK.getElementById('e-' + Blr.sId + '-subject').value = (HDN != undefined && HDN != "") ? fg : (BPh + fg);
        if (haiku.EDZ && haiku.EYv) oForm.Encrypt.value = oNote.EEr.EHA('Encrypt', 0);
    }
    if (haiku.EDZ && oNote.sUnid == '$new') {
        if (haiku.EMZ && haiku.EnableSignMail == '1') oForm.Sign.value = '1';
        if (haiku.EYv && haiku.EnableEncryptMail == '1') oForm.Encrypt.value = '1';
    }
    EMc.value = EMc.value || EcK.getElementById('e-form-' + Blr.sId).getAttribute('com_ibm_dwa_ui_document_sendto') || '';
    for (var BRg = [EMc, EIA, EWL], i = 0; i < BRg.length; i++) ENR.get(BRg[i]).synchronize();
    var oFrom = (new EXH).EFm(oNote, 'From');
    var oOwnerEntity = new EKq(new EPy(haiku.Edd), new EPy(haiku.GsC), new EPy(haiku.EFY), haiku.EMq);
    var sFrom = oOwnerEntity.lM() + '';
    var oUserEntity = new EKq(new EPy(haiku.AbbrevUserName), new EPy(haiku.EOZ), new EPy(''), haiku.EGD);
    var sCurrentUser = oUserEntity.lM() + '';
    EVF(EcK.getElementById('e-' + Blr.sId + '-from'), sFrom);
    EVF(EcK.getElementById('e-' + Blr.sId + '-principal'), sCurrentUser);
    if (sCurrentUser && sFrom != sCurrentUser) {
        EJQ(EcK.getElementById('e-' + Blr.sId + '-principal-label'), 's-nodisplay', false);
        EJQ(EcK.getElementById('e-' + Blr.sId + '-principal'), 's-nodisplay', false);
    }
    EVF(EcK.getElementById('e-' + Blr.sId + '-date'), new EJw(7).format(new EYB().setDate(new Date)));
    var Edp = EKc.prototype.EYl['e-form-' + Blr.sId + ':EHB'];
    if (Edp) {
        Edp.onActivated = this.activate.EHq(this, Blr);
        Edp.EZT = this.deactivate.EHq(this, Blr);
    }
    if (!AAA.FGG) {
        for (var s in{"keepprivate-container": void 0, "keepprivate-GPp-container": void 0}) EJQ(EcK.getElementById('e-' + Blr.sId + '-' + s), 's-nodisplay', false);
        var EpS = oNote.EHA('POSTEDDATE', 0);
        var GlK = oNote.EHA('From', 0);
        EcK.getElementById('e-' + Blr.sId + '-keepprivate').disabled = !!(EpS && EpS != '' && GlK && GlK != haiku.Kq);
    }
    if (haiku.EDZ && AAA.FWz.EUQ[41]) {
        for (var s in{"forcesign-container": void 0, "forcesign-GPp-container": void 0, "forceseal-container": void 0, "forceseal-GPp-container": void 0}) EJQ(EcK.getElementById('e-' + Blr.sId + '-' + s), 's-nodisplay', false);
        EcK.getElementById('e-' + Blr.sId + '-forcesign').disabled = !haiku.EMZ || (ESp(AAA.FWz.Gww, "EnableSignMail") >= 0);
        EcK.getElementById('e-' + Blr.sId + '-forceseal').disabled = !haiku.EYv || (ESp(AAA.FWz.Gww, "EnableEncryptMail") >= 0);
        if (haiku.EMZ) EcK.getElementById('e-' + Blr.sId + '-forcesign').checked = (oForm.Sign.value == '1');
        if (haiku.EYv) EcK.getElementById('e-' + Blr.sId + '-forceseal').checked = (oForm.Encrypt.value == '1');
    }
    this.Emb(Blr);
    Blr.EVw = {};
    var DhU = new EOc;
    DhU.DlJ = function () {
        EPl(EcK.getElementById('e-' + Blr.sId + '-mailinfo'), true);
    };
    if (oNote.EHA('FollowUpStatus', 0)) {
        var EUv = new EWt(void 0, 'EEC', Blr.EVw, oNote);
        EUv.DhU = DhU;
        EUv.track();
        EUv.load(AAA.FhR(['FollowUp']));
    } else {
        DhU.DlJ();
    }
    var Gnv = oNote.EHA('Classification', 0);
    var Ghf = oNote.EHA('ConfidentialString', 0);
    oForm.Classification.value = Gnv ? Gnv : "";
    oForm.ConfidentialString.value = Ghf ? Ghf : "";
    EcK.getElementById('e-' + Blr.sId + '-classification').checked = oForm.Classification.value && (oForm.Classification.value == oForm.ConfidentialString.value);
    var HJY = oNote.EHA('ExpandPersonalGroups', 0);
    HJY && (oForm.ExpandPersonalGroups.value = HJY);
};
oForm.ENB = function FHU(Blr, GHv) {
    if (!GHv) GHv = 0;
    var EcK = AAA.EcK;
    var sBody = 'e-' + Blr.sId + '-body';
    var EjF = Enx.get(EcK.getElementById(sBody + 'rich').getAttribute('com_ibm_dwa_ui_editor_controller'));
    var ESQ = EjF.Btk.Egb();
    if (!ESQ && GHv < 10) {
        setTimeout(this.ENB.EHq(this, Blr, GHv++), 200);
        return;
    }
    var EsY = Eko.get(EcK.getElementById(sBody + 'plain').getAttribute('com_ibm_dwa_ui_editor_controller'));
    var ELq = EcK.getElementById(sBody + 'plain-editor');
    var HMC = (/^a-newmailwithstationery$/).test(Blr.EWX);
    var oNote = HMC ? Blr.oNote.EEr : Blr.oNote;
    var EIv = oNote.EHA('s_PlainEditor');
    var EUc = haiku.BXw ? false : EIv == '0' ? true : EIv == '1' ? false : haiku.EGj == 1;
    Blr.sEditorInUse = sBody + (EUc ? 'rich' : 'plain');
    var Frl = EKc.prototype.EYl['e-dropdown-format-mailedit:EFX'];
    if (Frl) Frl.Fks(!EUc + 0);
    EjF.EiR = EsY.EiR = haiku.EHD;
    EjF.bInitialGotImage = EsY.bInitialGotImage = true;
    ESQ.tabIndex = EUc ? '5' : '-1';
    ELq.tabIndex = EUc ? '-1' : '5';
    var ElY = ESQ;
    var ERN = Blr.oNote.ByT['BodyHtml'];
    var HBA = ERN && ERN.length > 0;
    if (ERN || (/^a-(newmailwithstationery|copyintonewmessage)$/).test(Blr.EWX)) {
        var GxY = Blr.oNote.ByT['HeaderParentHtml'] + Blr.oNote.ByT['BodyParentHtml'] + Blr.oNote.ByT['FooterParentHtml'];
        ERN = ERN || GxY;
        ERN = ERN.replace(new RegExp('^(\s*)' + ('<font face="' + <dwa:string id="D_FONTFACE_SANSSERIF"/> + '" size="2">%1</font>').replace(/%1/, '(.*)') + '(\s*)$', 'i'), '$1$2$3');
        if (Blr.EWX == 'a-copyintonewmessage') {
            ERN = '<DIV><BR></DIV><FONT color=#990099>' + <dwa:string id="L_MSG_GET_COPY_INTO_NEW_HISTORY_HEADING" quotes="single"/> + '<BR><BR></FONT>' + ERN;
        }
        ERN = ERN.replace(/<(|\/)FORM(.+?)>/gi, '<$1DIV><!-- Removed by iNotes RTE: <$1FORM$2> -->');
        ERN = ERN.replace(new RegExp('(src|href)="\.\.\/', 'gi'), '$1="../../' + Blr.DWf + '/');
        ERN = ERN.replace(/<div id=("MIMEAttachInfoDiv"|MIMEAttachInfoDiv)[^>]*><\/div>/gi, '');
        ElY.innerHTML = ERN.replace(/MIMEmailbodyiframe/, 'e-' + Blr.sId + '-bodyiframe');
    } else if (Blr.oNote.EEr && Blr.EWX != 'a-reply' && Blr.EWX != 'a-replyall') {
        this.Geo(Blr, ElY);
    }
    for (var n = 0, asTag = ['META', 'LINK', 'TITLE', 'STYLE', 'SCRIPT']; n < asTag.length; n++) {
        for (var BRg = ElY.getElementsByTagName(asTag[n]), i = BRg.length - 1; i >= 0; i--) {
            if (BRg[i].parentNode) BRg[i].parentNode.removeChild(BRg[i]);
        }
    }
    for (var BRg = ElY.getElementsByTagName('PRE'), i = BRg.length - 1; i >= 0; i--) {
        var oElem = BRg[i];
        var reSpc = new RegExp("  ", "g");
        this.Ebq(oElem, [/&/g, '&amp;', /&amp;#/g, '&#', /\"/g, '&quot;', /</g, '&lt;', />/g, '&gt;', /\r\n/g, '<BR>', /\r/g, '<BR>', /\n/g, '<BR>', reSpc, ' &nbsp;' , /^ /g, '&nbsp;', /<BR> /gi, '<BR>&nbsp;']);
        var oFont = EcK.createElement('FONT');
        oFont.face = <dwa:string id="D_FONTFACE_MONOSPACE"/>;
        oFont.size = 2;
        oFont.innerHTML = oElem.innerHTML;
        var HEz = EcK.createElement('DIV');
        HEz.appendChild(oFont);
        oElem.parentNode.replaceChild(HEz, oElem);
    }
    for (var DoL = ElY.getElementsByTagName('TT'), i = DoL.length - 1; i >= 0; i--) {
        for (var DyZ = DoL[i].getElementsByTagName('FONT'), j = DyZ.length - 1; j >= 0; j--) {
            if (DyZ[j].face == "") {
                DyZ[j].face = <dwa:string id="D_FONTFACE_MONOSPACE"/>;
                DyZ[j].size = 2;
            }
        }
    }
    for (var n = 0, asTag = ['META', 'LINK', 'TITLE', 'STYLE', 'SCRIPT']; n < asTag.length; n++) {
        for (var BRg = ElY.getElementsByTagName(asTag[n]), i = BRg.length - 1; i >= 0; i--) {
            if (BRg[i].parentNode) BRg[i].parentNode.removeChild(BRg[i]);
        }
    }
    if (!EUc) ElY.innerHTML = ElY.innerHTML.replace(/<br><br>(|<font .*>)\r\n<div>/gi, '<br>$1<div>');
    if (Blr.oNote.sUnid == '$new' && haiku.EPu == '1' && !(/^a-newmailwithstationery$/).test(Blr.EWX)) {
        GuH(ElY, void 0, HBA);
    }
    if (!EUc) {
        ELq.value = ElY.innerText;
        ElY.innerHTML = '';
    }
    var sHref = 'href="' + location.protocol + '//' + AAA.ELM.gLoc.hostname + (location.port ? (':' + location.port) : '') + '/';
    ElY.innerHTML = ElY.innerHTML.replace(new RegExp('href="\/', 'gi'), sHref);
    var oMap = {rich: ESQ, plain: ELq};
    var Ebj = AAA.Fkb();
    for (var s in oMap) oMap[s].attachEvent("onkeyup", Ebj.Eor.EHq(Ebj, Blr.sId));
    if (AAA.FWz.HCD) {
        var reg1 = new RegExp('\n', 'gi');
        var reg2 = new RegExp('\r', 'gi');
        ElY.innerHTML = ElY.innerHTML.replace(reg1, '').replace(reg2, '');
    }
    Blr.oDefaultValues = {};
    for (var s in{'sendto': void 0, 'copyto': void 0, 'blindcopyto': void 0, 'subject': void 0}) Blr.oDefaultValues[s] = EcK.getElementById('e-' + Blr.sId + '-' + s).value;
    var Cis = EKc.prototype.EYl['e-' + Blr.sId + (EUc ? '-bodyrich:ElN' : '-bodyplain:EiJ')];
    if (Cis) Cis.HIS();
    setTimeout(this.DuU.EHq(this, Blr), 0);
    setTimeout(this.Gbd.EHq(this, Blr), 0);
};
oForm.Ebq = function Eoj(oElem, avReplaces) {
    if (oElem.nodeName == '#text') {
        var sText = oElem.nodeValue;
        for (var i = 0; i < avReplaces.length; i += 2) sText = sText.replace(avReplaces[i], avReplaces[i + 1]);
        var oSpan = AAA.EcK.createElement('SPAN');
        oSpan.innerHTML = sText;
        var DoJ = AAA.EcK.createDocumentFragment();
        var CQQ = oSpan.firstChild;
        while (CQQ != null) {
            DoJ.appendChild(CQQ.cloneNode(true));
            CQQ = CQQ.nextSibling;
        }
        var oNode = oElem.parentNode;
        oNode.insertBefore(DoJ, oElem);
        oNode.removeChild(oElem);
        return;
    }
    var oNode = oElem.firstChild;
    while (oNode != null) {
        var Dhi = oNode.nextSibling;
        this.Ebq(oNode, avReplaces);
        oNode = Dhi;
    }
};
function GuH(ElY, Yt, HBA) {
    var EcK = AAA.EcK;
    if (Yt || !ElY) {
        ElY = EcK.createElement('div');
    }
    var DuT = ElY.ownerDocument;
    var oSig = DuT.createElement('div');
    if (haiku.SignatureType == "0") {
        var Epe = haiku.Signature_1.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
        for (var i = Epe.length - 1; i >= 0; i--) {
            if (-1 != Epe[i].indexOf((('[') + '<'))) {
                var sText = Epe[i];
                var KK = sText.indexOf(('[') + '<');
                var nEnd = sText.indexOf(('>') + ']', KK);
                if (nEnd != -1) nEnd += 2; else {
                    nEnd = sText.indexOf(']', KK);
                    if (nEnd != -1) nEnd += 1; else nEnd = sText.length;
                }
                var FnI = sText.slice(0, KK);
                var FnJ = sText.slice(KK, nEnd);
                var FnK = sText.slice(nEnd);
                if (FnK) oSig.insertBefore(DuT.createTextNode(FnK), oSig.firstChild);
                var oSpan = DuT.createElement('span');
                oSpan.innerHTML = FnJ.replace(('[') + '<', '<').replace(('>') + ']', '>');
                oSig.insertBefore(oSpan, oSig.firstChild);
                if (FnI) oSig.insertBefore(DuT.createTextNode(FnI), oSig.firstChild);
            } else oSig.insertBefore(DuT.createTextNode(Epe[i]), oSig.firstChild);
            oSig.insertBefore(DuT.createElement('br'), oSig.firstChild);
        }
    } else {
        oSig.innerHTML = (haiku.SignatureType == "1") ? haiku.HTMLSignature : ((haiku.SignatureType == "2") ? haiku.RichSignature : "");
    }
    oSig.insertBefore(DuT.createElement('br'), oSig.firstChild);
    if (HBA) ElY.appendChild(oSig); else ElY.insertBefore(oSig, ElY.firstChild);
    return ElY;
}
oForm.GjR = function FBo(Blr) {
    var sId = Blr.sId;
    var ByT = Blr.oNote.ByT;
    var EcK = AAA.EcK;
    var sBody;
    if (!EcK.getElementById('e-' + sId + '-sendto')) return false;
    for (var s in{'sendto': void 0, 'copyto': void 0, 'blindcopyto': void 0, 'subject': void 0}) {
        if (Blr.oDefaultValues[s] != EcK.getElementById('e-' + Blr.sId + '-' + s).value) return true;
    }
    var EUc = (/bodyrich$/.test(Blr.sEditorInUse));
    var Cis = EKc.prototype.EYl['e-' + Blr.sId + (EUc ? '-bodyrich:ElN' : '-bodyplain:EiJ')];
    if (Cis && Cis.GjR()) return true;
    var GkP = false;
    var EgU = EcK.getElementById('e-form-' + Blr.sId);
    if (EgU) {
        var Fxe = EgU.getAttribute('com_ibm_dwa_ui_document_previewmode') == 'true';
        var GZS = !AAA.FGG && !Fxe && AAA.FWz.EUQ[9] && !Boy.NoAXUp;
        var cl = !GZS ? 'ETO' : 'GsZ';
        var Edp = EKc.prototype.EYl['e-' + Blr.sId + '-attachmentsarea:' + cl];
        GkP = Edp && Edp.GjR && Edp.GjR();
    }
    return GkP;
};
oForm.onCloseForm = function Fhm(Blr) {
    if (!Blr.Gjc && (Blr.oNote.EHA('h_SetSaveDoc') == 1 || (Blr.HGY || Blr.oNote.sUnid) != Blr.oNote.sUnid)) {
        var DhU = new EGe();
        DhU.DlJ = DhU.Dhe = function () {
            if (this.EVW.readyState != 4) return;
            this.release();
        };
        var Bip = {sUnid: Blr.HGY || Blr.oNote.EHA('h_PageUnid', 0)};
        var sUrl = AAA.MO + '/($All)/' + (Blr.HGY || Blr.oNote.EHA('h_PageUnid', 0)) + '/?DeleteDocuments&HardDelete';
        DhU.load(sUrl, '' + new ENj(Bip, true));
    }
    var EeB = EUp.get();
    EeB.EPo = null;
    EeB.EIR.hide();
};
oForm.deactivate = function FJu(Blr) {
    Blr.EFk = false;
};
oForm.activate = function FeO(Blr) {
    if (!EKc.prototype.EYl['e-actions-mailedit:Ebx']) {
        var oElem = AAA.EcK.getElementById('e-actions-mailedit');
        oElem.setAttribute('com_ibm_dwa_ui_widget_class', oElem.getAttribute('com_ibm_dwa_ui_widget_class') + ' Ebx');
        EPl(oElem);
    }
    var Frl = EKc.prototype.EYl['e-dropdown-format-mailedit:EFX'];
    if (Frl) {
        var Ees = Blr.sEditorInUse ? /plain$/.test(Blr.sEditorInUse) : haiku.EGj == 0;
        Frl.Fks(Ees + 0);
    }
    Frl = EKc.prototype.EYl['e-dropdown-display-mailedit:EFX'];
    if (Frl) {
        var Fkm = ['-blindcopyto-container', '-additionalinfo-container', '-from-container'];
        for (var i = 0; i < Fkm.length; i++) {
            oElem = AAA.EcK.getElementById('e-' + Blr.sId + Fkm[i]);
            var bShow = oElem.className.indexOf('s-nodisplay') == -1;
            if ((bShow && !Frl.BaR(i)) || (!bShow && Frl.BaR(i))) Frl.Fks(i);
        }
        Blr.toggleMailDisplay();
    }
    var EMc = AAA.EcK.getElementById('e-' + Blr.sId + '-sendto');
    if (EMc.value == "") EMc.focus(); else this.ENr(Blr);
    Blr.EFk = true;
};
oForm.Emb = function FQd(Blr) {
    var EmN = this;
    var ElE = function EnC(ev) {
        if (ev.keyCode != 120) return;
        Blr.EPo = ev.srcElement;
        EmN.Eep(Blr);
    };
    AAA.EcK.getElementById('e-form-' + Blr.sId).attachEvent("onkeydown", ElE);
};
oForm.Eep = function FaS(Blr) {
    var EcK = AAA.EcK;
    var oForm = EcK.getElementById('e-pageui-' + Blr.sId);
    var oMap = {SendTo: 'e-' + Blr.sId + '-sendto', CopyTo: 'e-' + Blr.sId + '-copyto', BlindCopyTo: 'e-' + Blr.sId + '-blindcopyto'};
    var EYb = {};
    for (var s in oMap) {
        EYb[s] = ENR.get(EcK.getElementById(oMap[s]));
        EYb[s].synchronize();
    }
    var EeB = EUp.get();
    EeB.EPo = null;
    EeB.fExpandPersonalGroups = oForm.ExpandPersonalGroups.value != '0';
    EeB.EIR.hide();
    var Eay = new EZH(EYb);
    Eay.fSign = oForm.Sign.value == '1';
    Eay.DDz = oForm.Encrypt.value == '1';
    Eay.fAllowFwdAddress = true;
    Eay.DhU = new EOc();
    Eay.DhU.DlJ = function () {
        for (var s in oMap) {
            var oImg = EcK.getElementById('nvimg-' + oMap[s]);
            oImg.src = AAA.BYp('transparent.gif');
            oImg.style.cursor = "default";
            oImg.title = "";
            if (oImg.fnOnClick) oImg.detachEvent("onclick", oImg.fnOnClick);
            oImg.fnOnclick = null;
            var CLx = EcK.getElementById(oMap[s]);
            CLx.Dhp = CLx.value;
        }
        if (Blr.EPo) {
            Blr.EPo.focus();
            Blr.EPo = null;
        }
    };
    Eay.load();
};
oForm.ElH = function FXW(ev) {
    var oElem = ev.srcElement;
    var ELS = oElem.id.match(/^nvimg-e\-(.*)\-.*$/);
    if (ELS) this.Eep(AAA.Fkb().getContent(ELS[1]));
};
oForm.nameFieldValueChanged = function FYp(ev, sId) {
    var oKeys = {37: void 0, 39: void 0, 35: void 0, 36: void 0, 120: void 0};
    if (ev.keyCode in oKeys) return;
    var CLx = AAA.EcK.getElementById(sId);
    if (CLx.value == CLx.Dhp) return;
    var oImg = AAA.EcK.getElementById('nvimg-' + sId);
    if (CLx.value) {
        if (!oImg.title) {
            oImg.src = AAA.BYp('nameres.gif');
            oImg.style.cursor = (window.CSS2Properties ? 'pointer' : 'hand');
            oImg.title = <dwa:string id="L_VAL_CHECKNAMES"/>;
            oImg.fnOnClick = this.ElH.ETg(this);
            oImg.attachEvent("onclick", oImg.fnOnClick);
        }
    } else {
        oImg.src = AAA.BYp('transparent.gif');
        oImg.style.cursor = "default";
        oImg.title = "";
        if (oImg.fnOnClick) oImg.detachEvent("onclick", oImg.fnOnClick);
        oImg.fnOnClick = null;
    }
    CLx.Dhp = CLx.value;
};
oForm.Esa = function FTs(sInputId) {
    var CLx = AAA.EcK.getElementById(sInputId);
    var oImg = AAA.EcK.getElementById('nvimg-' + sInputId);
    var EsN = false;
    for (var ETM = ENR.get(CLx).ETM, i = 0; i < ETM.length; i++) {
        if (!(ETM[i] instanceof EKq)) {
            EsN = true;
            break;
        }
    }
    if (!EsN) {
        oImg.src = AAA.BYp('transparent.gif');
        oImg.style.cursor = "default";
        oImg.title = "";
        if (oImg.fnOnClick) oImg.detachEvent("onclick", oImg.fnOnClick);
        oImg.fnOnClick = null;
    }
    CLx.Dhp = CLx.value;
};
oForm.ENr = function FMR(Blr) {
    var sBody = 'e-' + Blr.sId + '-body';
    if (!Blr.sEditorInUse) {
        setTimeout(this.ENr.EHq(this, Blr), 200);
        return;
    }
    var sMode = Blr.sEditorInUse.match(/(rich|plain)$/)[0];
    var Eby = AAA.EcK.getElementById(sBody + sMode);
    if (Eby && Eby.style.visibility != '') setTimeout(this.ENr.EHq(this, Blr), 200); else {
        if (sMode == 'rich') {
            var EjF = AAA.EcK.getElementById(Blr.sEditorInUse).getAttribute('com_ibm_dwa_ui_editor_controller');
            var FUK = Enx.get(EjF);
            var ESQ = FUK.Btk.Egb();
            ESQ.ownerDocument.selection.empty();
            var Yt = ESQ.ownerDocument.body.createTextRange();
            Yt.moveToElementText(ESQ);
            Yt.collapse();
            Yt.select();
        } else {
            var ELq = AAA.EcK.getElementById(sBody + 'plain-editor');
            if (ELq) {
                ELq.focus();
            }
        }
    }
};
oForm.Geo = function Gmx(Blr, oElem) {
    var oNote = Blr.oNote;
    var EEr = oNote.EEr;
    var Grl = oElem.parentNode;
    if (Grl) Grl.removeChild(oElem);
    var Czm = [], n = 0;
    if (oNote.ByT['BodyParentHtml'] instanceof Array) {
        for (var i = 0; i < oNote.ByT['BodyParentHtml'].length; i++) {
            var EVm = (new EXH).HGv(EEr, 'Principal', oNote.ByT['PrincipalParentHtml'][i], oNote.ByT['x_AltPrincipalParentHtml'][i], '', oNote.ByT['x_LangPrincipalParentHtml'][i]);
            var oFrom = (new EXH).HGv(EEr, 'From', oNote.ByT['FromParentHtml'][i], oNote.ByT['AltFromParentHtml'][i], '', oNote.ByT['x_LangFromParentHtml'][i]);
            var ELe = (new EXH).HGv(EEr, 'SendTo', oNote.ByT['SendToParentHtml'][i], oNote.ByT['AltSendToParentHtml'][i], '', oNote.ByT['x_NameLanguageTagsParentHtml'][i]);
            var EKb = (new EXH).HGv(EEr, 'CopyTo', oNote.ByT['CopyToParentHtml'][i], oNote.ByT['AltCopyToParentHtml'][i], '', oNote.ByT['x_NameLanguageTagsParentHtml'][i]);
            var sFrom = oFrom.EQm(0);
            var DOn = EVm.EQm(0);
            var BoH = ELe.ETP().join(', ');
            var Bjb = EKb.ETP().join(', ');
            var EHS = oNote.ByT['SubjectParentHtml'][i];
            var fg = EHS instanceof Array ? EHS.join('') : EHS;
            var HHn = oNote.ByT['GaS'] ? oNote.ByT['GaS'][i].split(',') : void 0;
            var HFK = oNote.ByT['BqT'] ? oNote.ByT['BqT'][i].split(',') : void 0;
            Czm[n++] = this.HBR(Blr, sFrom, DOn, BoH, Bjb, fg, oNote.ByT['BodyParentHtml'][i], oNote.ByT['HeaderParentHtml'][i], oNote.ByT['FooterParentHtml'][i], HHn, HFK, oNote.ByT['fBodyParentSpecial'][i]);
        }
    } else {
        var EVm = (new EXH).EFm(EEr, 'Principal');
        var oFrom = (new EXH).EFm(EEr, 'From');
        var ELe = (new EXH).EFm(EEr, 'SendTo');
        var EKb = (new EXH).EFm(EEr, 'CopyTo');
        var sFrom = oFrom.EQm(0);
        var DOn = EVm.EQm(0);
        var BoH = ELe.ETP().join(', ');
        var Bjb = EKb.ETP().join(', ');
        var EHS = EEr.EHA('Subject');
        var fg = EHS instanceof Array ? EHS.join('') : EHS;
        Czm[n++] = this.HBR(Blr, sFrom, DOn, BoH, Bjb, fg, oNote.ByT['BodyParentHtml'], oNote.ByT['HeaderParentHtml'], oNote.ByT['FooterParentHtml'], oNote.EHA('s_AttachmentsParent'), oNote.EHA('CBM'), oNote.ByT['fBodyParentSpecial']);
    }
    oElem.innerHTML = Czm.join('');
    for (var aoImg = oElem.getElementsByTagName('img'), i = 0; i < aoImg.length; i++) {
        try {
            var sSrc = aoImg[i].src;
            var bSchemes = (/^https?:/i).test(sSrc) || (/^data:/i).test(sSrc);
            sSrc = (!bSchemes && sSrc[0] != '/' ? window.location.pathname : '') + sSrc;
            sSrc = (!bSchemes ? AAA.MO : '') + sSrc;
            if (aoImg[i].src != sSrc) aoImg[i].src = sSrc;
        } catch (e) {
        }
    }
    Grl && Grl.appendChild(oElem);
};
oForm.HBR = function HHc(Blr, sFrom, DOn, BoH, Bjb, fg, FQE, sHeaderParent, sFooterParent, HHn, HFK, bBodyParentSpecial) {
    var oNote = Blr.oNote;
    var EEr = oNote.EEr;
    var Czm = [], n = 0;
    FQE = (sHeaderParent ? ('<br><br>' + sHeaderParent) : '') + (FQE ? ('<br><br>' + FQE) : '') + (sFooterParent ? ('<br><br>' + sFooterParent) : '');
    var Gbj = false;
    if (!bBodyParentSpecial) {
        if (BoH) {
            EVF(AAA.GFY, BoH);
            Czm[n++] = <dwa:string id="L_TO"/> + ' ' + AAA.GFY.innerHTML + '<br>';
        }
        EVF(AAA.GFY, sFrom);
        Czm[n++] = DOn && DOn != sFrom ? (<dwa:string id="L_FROM"/> + ' ' + DOn + '<br>' + <dwa:string id="L_SENTBY"/> + ' ' + sFrom + '<br>') : (<dwa:string id="L_FROM"/> + ' ' + AAA.GFY.innerHTML + '<br>');
        var vDate = EEr.EHA('s_DisplayDate');
        if (vDate) {
            var EGF = (new EYB).setDate(vDate instanceof Array ? vDate[0] : vDate);
            Czm[n++] = <dwa:string id="L_DATE"/> + ' ' + new EJw(1).format(EGF) + ' ' + new EJw(101).format(EGF) + '<br>';
        }
        if (Bjb) {
            EVF(AAA.GFY, Bjb);
            Czm[n++] = <dwa:string id="L_CC"/> + ' ' + AAA.GFY.innerHTML + '<br>';
        }
        EVF(AAA.GFY, fg);
        Czm[n++] = <dwa:string id="L_SUBJECT"/> + ' ' + (fg ? AAA.GFY.innerHTML : <dwa:string id="L_UNTITLED_PAREN"/>);
        Gbj = true;
    }
    var sTmp = FQE.replace(/(\<td class="domino(?:Sel)?TopTab")/gi, '$1 style="display:none"');
    if (sTmp != FQE) {
        if (!Gbj || confirm(<dwa:string id="L_WARN_TABBED_TABLE"/>)) FQE = sTmp;
    }
    FQE = FQE.replace(/<(|\/)FORM(.+?)>/gi, '<$1DIV><!-- Removed by iNotes RTE: <$1FORM$2> -->');
    var GjK = this.GrV(FQE);
    var GRz = [];
    var GNo = FQE.replace(/<div id=("MIMEAttachInfoDiv"|MIMEAttachInfoDiv)[^>]*><\/div>/gi, '');
    for (var i = 0; HHn && i < HHn.length && HHn[i]; i++) {
        HHn[i] = HHn[i].replace(/(^\"+)|(\"+$)/g, '');
        var Gnl = (GjK[HHn[i]] ? GjK[HHn[i]] : HHn[i]);
        if (GNo.indexOf(Gnl.replace(/(^\"+)|(\"+$)/g, '')) == -1) GRz.push(EYX(<dwa:string id="L_MSG_GET_REPLY_ATTACHMENT_HISTORY" quotes="single"/>, Gnl));
    }
    var HEG = (GRz[0] ? ('<br><br><i>' + GRz.join('<br>') + '</i>') : '');
    Czm[n++] = HEG;
    Czm[n++] = FQE;
    var oDate = oNote.EHA('s_DocCreated', 0);
    var Evf = oDate ? new EJw(7).format((new EYB).setDate(oDate)) : '';
    var EIa = new EKq(new EPy(haiku.AbbrevUserName), new EPy(haiku.EOZ), new EPy(''), haiku.EGD);
    var Cfd = Blr.EWX.match(/^a\-forward/) ? EYX(<dwa:string id="L_MSG_GET_FORWARD_HEADING_FROM" quotes="single"/>, EIa.lM(), Evf) : EYX(<dwa:string id="L_MSG_GET_REPLY_HISTORY_HEADING" quotes="single"/>, sFrom);
    Blr.sReplyHistoryHeadingText = Cfd;
    EVF(AAA.GFY, Cfd);
    var GLJ = AAA.GFY.innerHTML;
    var EFj = [];
    for (var i = 0; HFK && i < HFK.length && HFK[i]; i++) {
        HFK[i] = HFK[i].replace(/(^\"+)|(\"+$)/g, '');
        var Gnl = (GjK[HFK[i]] ? GjK[HFK[i]] : HFK[i]);
        EFj[i] = EYX(<dwa:string id="L_MSG_GET_REPLY_ATTACHMENT_REMOVED" quotes="single"/>, Gnl, EIa.lM());
    }
    if (Blr.EWX.match(/withinternetstyle$/)) {
        var oDiv = AAA.GFY;
        oDiv.style.cssText = 'position:absolute;';
        oDiv.innerHTML = Czm.join('');
        EJQ(oDiv, 's-nodisplay', true);
        var BPh = haiku.EOy;
        var ELA = haiku.EYJ - BPh.length;
        ELA = ELA > 1 ? ELA : 1;
        var DFl = oDiv.innerText.replace(/\r/, '').replace(/\t/, ' ').split('\n');
        var EaA = [];
        for (var i = 0; i < DFl.length; i++) {
            var sText = DFl[i];
            while (sText.length > ELA) {
                var CYp = sText.lastIndexOf(' ', ELA);
                EaA.push(sText.substr(0, CYp >= 0 ? CYp : ELA).replace(/\s+$/, ''));
                sText = sText.substr(CYp >= 0 ? (CYp + 1) : ELA);
            }
            EaA.push(sText);
        }
        oDiv.innerText = BPh + EaA.join('\n' + BPh);
        if (EFj[0]) {
            var Eti = AAA.EcK.createElement('div');
            Eti.innerHTML = EFj.join('<br>');
            oDiv.appendChild(Eti);
        }
        return '<br><br><font color="#990099">' + GLJ + '</font><br><br>' + oDiv.innerHTML;
    } else {
        return '<br><br><font color="#990099">' + GLJ + '</font>' + (!bBodyParentSpecial ? '<div style="' + <dwa:string id="D_PADDING_DEFAULT"/> + ':5px;"><div style="' + <dwa:string id="D_PADDING_REVERSE"/> + ':0px;' + <dwa:string id="D_PADDING_DEFAULT"/> + ':5px;border-left:solid black 2px;">' : '' ) + Czm.join('') + (!bBodyParentSpecial ? '</div>' : '') + (EFj[0] ? ('<br><br>' + EFj.join('<br>')) : '') + '</div>';
    }
};
oForm.GrV = function GrV(ERN) {
    var aRet = [];
    var s = this.EmZ(ERN);
    if (s) {
        AAA.GFY.innerHTML = s;
        var aInfo = AAA.GFY.childNodes;
        for (var i = 0; aInfo && i < aInfo.length; i++) {
            if (!aInfo[i].title) continue;
            var sData = aInfo[i].title.split('|');
            var Drl = sData[1];
            var EBQ = sData[2] ? sData[2] : Drl;
            aRet[EBQ] = Drl;
        }
    }
    return aRet;
};
oForm.EmZ = function EmZ(EMC) {
    var BNi = RegExp.multiline;
    RegExp.multiline = true;
    var sStr = (EMC instanceof Array) ? EMC.join('') : EMC;
    var EbG = [];
    while (sStr.match(/<div\s+[^<>]*id\s*=\s*[\"\']?\s*MIMEAttachInfoDiv\s*[\"\']?[^<]*>|<div\s+title\s*=\s*[\"\']?[^<>\"\']+\|[^<>\"\']+[\"\']?\s+style\s*=\s*[\"\']?\s*display\s*:\s*none\s*[\"\']?[^<]*>/i)) {
        var sRest = RegExp.rightContext;
        var sDiv = RegExp.lastMatch;
        if (!sRest.match(/<\/div\s*>/i)) {
            break;
        }
        EbG[EbG.length] = sDiv + RegExp.lastMatch;
        sStr = RegExp.rightContext;
    }
    RegExp.multiline = BNi;
    return EbG.join('');
};
oForm.DuU = function FFz(Blr) {
    var sBody = 'e-' + Blr.sId + '-body';
    var sMode = Blr.sEditorInUse.match(/(rich|plain)$/)[0];
    var oMap = {rich: [sBody + 'rich', sBody + 'plain'], plain: [sBody + 'plain', sBody + 'rich']};
    for (var i = 0; i < 2; i++) {
        for (var asIds = ['', '-commands'], j = 0; j < asIds.length; j++) {
            var oElem = AAA.EcK.getElementById(oMap[sMode][i] + asIds[j]);
            EJQ(oElem, 's-nodisplay', i != 0);
            oElem.style.visibility = i == 0 ? '' : 'hidden';
        }
    }
};
function EyT(sId) {
    var EJs = ELU.EJs[this.sId = sId];
    var Blr = EJs.EZN;
    var EFb = Blr.sEditorInUse + '-commands:' + (Blr.sEditorInUse.indexOf('rich') >= 0 ? 'EmU' : 'Eku');
    var EMw = EKc.prototype.EYl[EFb];
    EMw.DRX.sSendActionId = sId;
    EMw.DRX.sAction = EJs.sAction;
    new EKc(EMw.sId, EMw.cl + ':FqD', 1);
};
function EbK(sId) {
    var EcK = AAA.EcK;
    var EJs = ELU.EJs[this.sId = sId];
    var Blr = EJs.EZN;
    var oForm = EcK.getElementById('e-pageui-' + Blr.sId);
    if (/^a-send(andfile)?$/.test(EJs.sAction) && oForm['e-' + Blr.sId + '-sendto'].value.length == 0 && oForm['e-' + Blr.sId + '-copyto'].value.length == 0 && oForm['e-' + Blr.sId + '-blindcopyto'].value.length == 0) {
        alert(<dwa:string id="L_MAILMEMO_ERR_NO_RECIPIENT" quotes="single"/>);
        return;
    }
    for (var s in{EuZ: void 0, Gmi: void 0}) EKc.prototype.EQj['EbK:' + s] = ['MiscStdEdit', 'MailSendAction'];
    oForm.Sign.value = EcK.getElementById('e-' + Blr.sId + '-forcesign').checked - 0;
    oForm.Encrypt.value = EcK.getElementById('e-' + Blr.sId + '-forceseal').checked - 0;
    if (/^a-send(andfile)?$/.test(EJs.sAction) && (oForm.Sign.value == '1' || oForm.Encrypt.value == '1') && haiku.ERg == "0" && (AAA.FWz.EUQ[40] == 3) && !haiku.CXa && !haiku.ERx) {
        alert(<dwa:string id="L_ENCRYPT_MSG5"/>);
        return;
    }
    if (Blr.oNote.fVoiceMemo) {
        if (!Gyj(sId)) return;
    }
    var Ggz = /bodyplain$/.test(Blr.sEditorInUse);
    if (/^a-save(asdraft|stationery|andclose)$/.test(EJs.sAction) || !!Ggz || haiku.EaF != 3) {
        Blr.EvX = !!Ggz ? 0 : (EJs.sAction == 'a-saveasdraft' && haiku.EaF == 3 ? 1 : haiku.EaF);
        this.GtV();
    } else {
        setTimeout(function () {
            new EKc(sId, 'EbK:Gmi');
        }, 0);
    }
}
EbK.prototype.GtV = function Gtv() {
    var EJs = ELU.EJs[this.sId];
    if (EJs.sAction == 'a-sendandfile') {
        var BUq = this;
        ELU(null, EJs.EFb, 'EsC', {sAction: 'a-sendandfile', sParentActionId: this.sId, DjH: function (sDestFolder) {
            var EcK = AAA.EcK;
            var oForm = EcK.getElementById('e-pageui-' + EJs.EZN.sId);
            oForm.s_SendAndFile.value = "1";
            oForm.s_ViewName.value = "($All)";
            oForm.h_Move.value = "1";
            oForm.h_DestFolder.value = sDestFolder;
            BUq.Gxq();
        }});
    } else {
        this.Gxq();
    }
};
EbK.prototype.Gxq = function GxQ() {
    var EJs = ELU.EJs[this.sId];
    if (/^a-(saveasdraft|saveandclose|sendandfile)$/.test(EJs.sAction) || haiku.xF != 2) {
        AAA.EcK.getElementById('e-pageui-' + EJs.EZN.sId).SaveOptions.value = EJs.sAction == 'a-send' ? haiku.xF : 1;
        this.Esk();
    } else {
        var sId = this.sId;
        setTimeout(function () {
            new EKc(sId, 'EbK:EuZ');
        }, 0);
    }
};
EbK.prototype.Esk = function Ewo() {
    var EcK = AAA.EcK;
    var EJs = ELU.EJs[this.sId];
    var Blr = EJs.EZN;
    var oNote = Blr.oNote;
    var oForm = EcK.getElementById('e-pageui-' + Blr.sId);
    var Eqj;
    for (var s in Blr.EVw) {
        Eqj = true;
        break;
    }
    if (Eqj) {
        var EMM = EXS(Blr.EVw);
        for (var sKey in EMM) {
            if (oForm[sKey]) oForm[sKey].value = EMM[sKey] ? EMM[sKey] : '';
        }
        if (EMM['h_SetCommand'] == 'h_ShimmerAddFollowUpItems') {
            oForm.s_SaveFollowUp.value = '1';
            oForm.s_SaveFollowUpAlarm.value = EMM['Alarms'];
            oForm.s_RemoveFollowUpAlarm.value = '0';
        } else {
            oForm.s_SaveFollowUp.value = oForm.s_SaveFollowUpAlarm.value = '0';
            oForm.s_RemoveFollowUpAlarm.value = '1';
        }
    }
    if (!(/^a-save(asdraft|andclose)$/.test(EJs.sAction)) && AAA.FWz.EUQ[19] != "1" && (haiku.Disclaim != '0')) {
        var sBody = 'e-' + Blr.sId + '-body';
        var Ees = Blr.sEditorInUse.indexOf('plain') != -1;
        var EUc = Ees ? false : haiku.EGj == 1;
        if (EUc) {
            var EhB = EcK.getElementById(sBody + 'rich').getAttribute('com_ibm_dwa_ui_editor_controller');
            var ESQ = Enx.get(EhB).Btk.Egb();
        }
        var EjT = (EUc ? ESQ.ownerDocument : EcK).createElement('div');
        EjT.innerHTML = AAA.FWz.EUQ[22];
        if (EUc) {
            AAA.FWz.EUQ[19] == "2" ? ESQ.insertBefore(EjT, ESQ.firstChild) : ESQ.appendChild(EjT);
        } else {
            var ELq = EcK.getElementById(sBody + 'plain-editor');
            var FcJ = EcK.getElementById(sBody + 'plain-editorspellcheck');
            if (FcJ && FcJ.className.indexOf("s-nodisplay") == -1) {
                var FOp = EKc.prototype.EYl[sBody + 'plain:EiJ'];
                if (FOp && FOp.DRX.Enw) FOp.DRX.Enw();
            }
            var BpP = EjT.innerText + "\n";
            ELq.value = AAA.FWz.EUQ[19] == "2" ? (BpP + ELq.value) : (ELq.value + BpP);
        }
        oForm.$Disclaimed.value = '1';
    }
    var oMap = {SendTo: 'e-' + Blr.sId + '-sendto', CopyTo: 'e-' + Blr.sId + '-copyto', BlindCopyTo: 'e-' + Blr.sId + '-blindcopyto'};
    var EYb = {};
    for (var s in oMap) {
        EYb[s] = ENR.get(EcK.getElementById(oMap[s]));
        EYb[s].oSubmitElem = oForm[s];
        EYb[s].synchronize();
    }
    var EeB = EUp.get();
    EeB.EPo = null;
    EeB.fExpandPersonalGroups = oForm.ExpandPersonalGroups.value != '0';
    EeB.EIR.hide();
    !EeB.fExpandPersonalGroups && (EeB.oAllRecipsElem = oForm['s_AllRecips']);
    if (/^a-send(andfile)?$/.test(EJs.sAction)) {
        var Eay = new EZH(EYb);
        Eay.fSign = oForm.Sign.value == '1';
        Eay.DDz = oForm.Encrypt.value == '1';
        Eay.ELF = (Blr.EvX == 0);
        Eay.EqQ = true;
        Eay.DhU = new EOc();
        Eay.DhU.BUq = this;
        Eay.DhU.DlJ = function () {
            var Gej = [];
            for (var DbT in Eay.EFJ) {
                Gej = Gej.concat(Eay.EFJ[DbT].ETM);
            }
            FXG1.get(true).update(Gej);
            oForm.TrustInetCerts.value = "0";
            if (Eay.EPS) {
                var Gnc = Eay.EPS.oTrustedSMIME.ETP('signseal');
                var HEt = Eay.EPS.oTrustedSMIME.ETP('nodomsignseal');
                Gnc = Gnc.concat(Eay.EPS.oNoCertSMIME.ETP('signseal'));
                HEt = HEt.concat(Eay.EPS.oNoCertSMIME.ETP('nodomsignseal'));
                var Gqm = Eay.EPS.oFailed.ETP('signseal');
                if (haiku.Ebt) {
                    Gnc = Gnc.concat(Eay.EPS.oUntrustedSMIME.ETP('signseal'));
                    HEt = HEt.concat(Eay.EPS.oUntrustedSMIME.ETP('nodomsignseal'));
                    oForm.TrustInetCerts.value = "1";
                } else Gqm = Gqm.concat(Eay.EPS.oUntrustedSMIME.ETP('signseal'));
                var aJit = Eay.EPS.oJIT.ETP('signseal');
                if (aJit.length && AAA.FWz.EUQ[69] && haiku.EnableEncryptUnTrustInetCertsMail == "1") oForm.TrustInetCerts.value = "1";
                oForm.NotesRecips.value = Eay.EPS.oNotes.ETP('signseal').join(';');
                oForm.SMIMERecips.value = Gnc.join(';');
                oForm.NoDomRecips.value = HEt.join(';');
                oForm.JITUsers.value = aJit.join(';');
                oForm.hFailedUsers.value = Gqm.join(';');
                oForm.SMIMESign.value = !!(oForm.Sign.value == '1' && (haiku.Ecj & 2)) - 0;
            }
            if (EJs.sAction == 'a-send' && oForm['SendTo'].value.length == 0 && oForm['CopyTo'].value.length == 0 && oForm['BlindCopyTo'].value.length == 0) {
                for (var s in oMap) {
                    oForm[oMap[s]].value = "";
                    oForm[oMap[s]].Dhp = "";
                    var oImg = EcK.getElementById('nvimg-' + oMap[s]);
                    oImg.src = AAA.BYp('transparent.gif');
                    oImg.style.cursor = "default";
                    oImg.title = "";
                    if (oImg.fnOnClick) oImg.detachEvent("onclick", oImg.fnOnClick);
                    oImg.fnOnclick = null;
                }
                alert(<dwa:string id="L_MAILMEMO_ERR_NO_RECIPIENT" quotes="single"/>);
                return;
            }
            this.BUq.GmU();
        };
        Eay.load();
    } else {
        for (var s in oMap) EYb[s].EuB('', '', true);
        this.GmU();
    }
};
EbK.prototype.GmU = function Glc() {
    var EcK = AAA.EcK;
    var EYl = EKc.prototype.EYl;
    var EJs = ELU.EJs[this.sId];
    var Blr = EJs.EZN;
    var oNote = Blr.oNote;
    var EEr = oNote.EEr;
    var oElem = EcK.getElementById('e-' + Blr.sId + '-attachmentsarea');
    var cl = oElem && oElem.getAttribute('com_ibm_dwa_ui_widget_class') ? oElem.getAttribute('com_ibm_dwa_ui_widget_class') : 'ETO';
    var ELb = EYl['e-' + Blr.sId + '-attachmentsarea:' + cl];
    if (ELb) {
        Blr.GpN = (/bodyrich$/.test(Blr.sEditorInUse)) ? function (sHtml) {
            var Cis = EYl['e-' + Blr.sId + '-bodyrich:ElN'];
            var Eup = Cis.Egb();
            var GqM = EYl['e-' + Blr.sId + '-bodyrich-commands:EmU'];
            ElN.oElem = Eup;
            Eup.focus();
            GqM.Ebv(sHtml);
        } : null;
        ELb.Guc(Blr, this.EXU.EHq(this));
        return;
    }
    this.EXU();
};
EbK.prototype.EXU = function Edf() {
    var EcK = AAA.EcK;
    var EYl = EKc.prototype.EYl;
    var EJs = ELU.EJs[this.sId];
    var Blr = EJs.EZN;
    var oNote = Blr.oNote;
    var EEr = oNote.EEr;
    var DgM = EcK.getElementById('e-posttarget-' + Blr.sId);
    var oForm = EcK.getElementById('e-pageui-' + Blr.sId);
    var ErO = !!/bodyplain$/.test(Blr.sEditorInUse);
    var EvX = ErO ? 0 : Blr.EvX;
    oForm.target = 'e-posttarget-' + Blr.sId;
    oForm.h_Name.value = oForm.Subject.value;
    if (AAA.ELM.s_Charset) oForm['%%PostCharset'].value = AAA.ELM.s_Charset;
    oForm.s_PlainEditor.value = ErO - 0;
    oForm.s_UsePlainText.value = (EvX == 0) - 0;
    oForm.s_UsePlainTextAndHTML.value = (EvX == 2) - 0;
    var Cis = ErO ? EYl['e-' + Blr.sId + '-bodyplain:EiJ'] : EYl['e-' + Blr.sId + '-bodyrich:ElN'];
    var Eup = Cis.Egb();
    if (Cis.DRX.Enw) Cis.DRX.Enw();
    var oMap = {2: oForm.BodyPT, 0: oForm.Body};
    if (EvX in oMap) {
        oMap[EvX].value = Eup.innerText;
        if (EvX == 0 && oMap[EvX].value == '') oMap[EvX].value = ' ';
    }
    if (EvX == 2) {
        var Gba = 'NumOfBodyPT';
        if (oForm[Gba]) {
            oForm[Gba].value = 1;
            var GTa = 'BodyPT';
            var Dhp = oForm.BodyPT.value;
            while (Dhp.length > (Math.floor(32 * 1024 / 6))) {
                var nPos = (Math.floor(32 * 1024 / 6));
                oForm[GTa + (parseInt(oForm[Gba].value) > 1 ? oForm[Gba].value : '')].value = Dhp.substring(0, nPos);
                Dhp = Dhp.substring(nPos, Dhp.length);
                oForm[Gba].value = parseInt(oForm[Gba].value) + 1;
                var CLx = oForm[GTa + oForm[Gba].value];
                if (!CLx) {
                    CLx = EcK.createElement('input');
                    CLx.type = 'hidden';
                    CLx.name = CLx.id = GTa + oForm[Gba].value;
                    CLx = oForm.insertBefore(CLx, oForm.firstChild);
                }
                CLx.value = Dhp;
            }
        }
    }
    if (EvX != 0) {
        var sHtml = EYX(('<font face="' + <dwa:string id="D_FONTFACE_SANSSERIF"/> + '" size="2">%1</font>'), Eup.getElementsByTagName('img').length ? this.Est(Eup) : Eup.innerHTML);
        sHtml = sHtml.replace(/<(|\/)DIV><!-- Removed by iNotes RTE: <(|\/)FORM(.+?)> -->/gi, '<$1FORM$3>');
        sHtml = sHtml.replace(new RegExp('href=\"' + AAA.EcK.location.href.replace(/\?/gi, '\\?').replace(/&/gi, '&amp;') + '#', 'gi'), 'href=\"#');
        oForm.Body.value = sHtml;
        oForm.h_ImageCount.value = (oForm.h_ImageCount.value - 0) + (Blr.nAdditionalImageCount || 0);
        Blr.nAdditionalImageCount = 0;
    }
    var GjN = (Blr.oNote.EHA('h_ImageCount', 0) || 0) + (Blr.asNewImageFileNames || []).length;
    if (GjN) {
        var Gjx = false;
        var ELV = (Blr.oNote.EHA('s_AllAttachmentNames') || []).concat(Blr.asNewImageFileNames || []);
        for (var i = 0; i < ELV.length; i++) {
            if (!GrD(ELV[i])) continue;
            var BiL = ELV[i].match(/^image\.(.*)\.(jpg|jpeg|jpe|jfif|gif|art|bmp|dib|png|wmf|xbm)$/i);
            if (oForm.Body.value.indexOf('cid:' + BiL[1]) < 0) {
                var CLx = EcK.createElement('input');
                CLx.type = 'hidden';
                CLx.name = '%%Detach' + i;
                CLx.value = ELV[i];
                oForm.appendChild(CLx);
                Gjx = true;
            }
        }
        if (Gjx && !oForm.h_SetImageSync) {
            var CLx = EcK.createElement('input');
            CLx.type = 'hidden';
            CLx.name = 'h_SetImageSync';
            CLx.value = '1';
            oForm.appendChild(CLx);
        }
    }
    if (oNote.EHA('POSTEDDATE')) {
        oForm.From.disabled = true;
        oForm.AltFrom.disabled = true;
        oForm.$LangFrom.disabled = true;
        oForm.Principal.disabled = true;
        oForm.$AltPrincipal.disabled = true;
        oForm.$LangPrincipal.disabled = true;
        if (oNote.EHA('From') == haiku.Kq) {
            oForm.PostedDate.disabled = false;
            oForm.PostedDate.value = '';
        }
    } else {
        oForm.From.value = haiku.Kq;
        oForm.AltFrom.value = haiku.EXi;
        oForm.$LangFrom.value = haiku.EGD;
        oForm.Principal.value = oNote.EHA('Principal') || haiku.EUz || haiku.Kq;
        oForm.$AltPrincipal.value = oNote.EHA('x_AltPrincipal') || haiku.EQs || haiku.EXi;
        oForm.$LangPrincipal.value = oNote.EHA('x_LangPrincipal') || haiku.EMq || haiku.EGD;
    }
    oForm.Importance.value = Blr.oForm.ETL[oForm.DeliveryPriority.value];
    var ENt = AAA.Fkb(true).FAP(Blr.sId);
    if (ENt && (haiku.Eua || ENt.oCols.DWf != '($Inbox)')) ENt.EVq = true;
    var HEn = Blr.oNote.EEr;
    try {
        if (Blr.EZN && Blr.EZN.oNote) HEn = Blr.EZN.oNote;
    } catch (e) {
    }
    var HEl = Blr.EWX.match(/^a\-(reply|forward)/) && HEn;
    var EIX = [Blr.oNote.sUnid].concat(HEl ? [HEn.sUnid] : []);
    for (var i = 0; i < EIX.length; i++) delete AAA.GHi[EIX[i]];
    oForm.Form.value = oForm.Form.value ? oForm.Form.value : Blr.EWX && Blr.EWX.match(/^a\-reply/) ? "Reply" : "Memo";
    if (Blr.EWX && Blr.EWX.match(/^a\-reply/)) {
        oForm.h_SetParentUnid.value = EEr.sUnid;
        var ETp = EEr.EFu('x_MessageID') ? EEr.EFu('x_MessageID') : oNote.EFu('x_MessageID');
        var EXX = EEr.EHA('References') ? EEr.EHA('References') : oNote.EHA('References');
        oForm.In_Reply_To.value = ETp;
        var EKZ = ETp.BoB instanceof Array ? ETp.BoB : ETp.BoB ? [ETp.BoB] : [];
        var EJn = EXX instanceof Array ? EXX : EXX ? [EXX] : [];
        EKZ = EKZ.length != 1 || EKZ[0] ? EKZ : [];
        EJn = EJn.length != 1 || EJn[0] ? EJn : [];
        oForm.References.value = EKZ.concat(EJn).join(';');
        if (haiku.ERC) {
            oForm.s_SetRFSaveInfo.value = EEr.sUnid;
            oForm.s_SetReplyFlag.value = "1";
        }
    } else if (Blr.EWX && Blr.EWX.match(/^a\-forward/)) {
        oForm.s_SetForwardedFrom.value = '1';
        if (haiku.ERC) {
            oForm.s_SetRFSaveInfo.value = EEr.sUnid;
            oForm.s_SetReplyFlag.value = "2";
        }
    }
    oForm.h_SetCommand.value = {"a-saveasdraft": 'h_ShimmerSave', "a-send": 'h_ShimmerSendMail', "a-sendandfile": 'h_ShimmerSendMail'}[EJs.sAction];
    oForm.MailOptions.value = /^a-send(andfile)?$/.test(EJs.sAction) ? '1' : '0';
    oForm.h_SetPublishAction.value = 'h_Publish';
    oForm.h_SetPublishToFolder.value = '';
    oForm.h_SetSaveDoc.value = '1';
    oForm.h_SetEditNextScene.value = '';
    var EWJ = oNote.EHA('h_SetSaveDoc') ? oNote.EHA('h_PageUnid', 0) : (Blr.HGY || oNote.sUnid);
    var sAction = AAA.MO + '/' + Blr.DWf + "/" + EWJ + "/?EditDocument&Form=h_PageUI&PresetFields=h_EditAction;h_ShimmerEdit,s_ViewName;" + Blr.DWf + ",s_NotesForm;" + oForm.Form.value + "&ui=dwa_form";
    if ((oForm.Sign.value == '1' || oForm.Encrypt.value == '1') && !haiku.CXa && 1 != AAA.FWz.EUQ[40] && !haiku.ERx) sAction = 'https://' + AAA.ELM.gLoc.hostname + (haiku.ERg != '443' ? (':' + haiku.ERg) : '') + sAction;
    oForm.action = sAction;
    var Euv = {"a-saveasdraft": [<dwa:string id="L_SAVING_MAIL"/>, <dwa:string id="L_SAVING_MAIL_COMPLETE"/>], "a-saveandclose": [<dwa:string id="L_SAVING_MAIL"/>, <dwa:string id="L_SAVING_MAIL_COMPLETE"/>], "a-savestationery": [<dwa:string id="L_SAVING_STATIONERY"/>, <dwa:string id="L_SAVING_STATIONERY_COMPLETE"/>], "a-send": [<dwa:string id="L_SENDING_MAIL"/>, <dwa:string id="L_SENDING_MAIL_COMPLETE"/>], "a-sendandfile": [<dwa:string id="L_SENDING_MAIL"/>, <dwa:string id="L_SENDING_MAIL_COMPLETE"/>]};
    var DgM = EcK.getElementById('e-posttarget-' + Blr.sId);
    if (!DgM) return;
    if (DgM.DhU) {
        if (!EbK.fAlertShown) {
            EbK.fAlertShown = true;
            alert(<dwa:string id="L_PREVENT_OVERRIDE_SUBMIT"/>);
            EbK.fAlertShown = false;
        }
        return;
    }
    DgM.DhU = new GjU(Blr.oForm, Blr);
    DgM.DhU.Ehe = Euv[EJs.sAction][0];
    DgM.DhU.Ema = Euv[EJs.sAction][1];
    DgM.DhU.submit();
};
function GjU(oForm, Blr, sKey) {
    ESM.call(this, oForm, Blr, sKey);
}
GjU.prototype = new ESM('VOID');
GjU.prototype.DlJ = function GvH(sUnid) {
    var oForm = AAA.EcK.getElementById('e-pageui-' + this.Blr.sId);
    if (oForm.s_NewFolderList.value) {
        AAA.Fkb().GSg(new Date(), "?oen", '', oForm.s_NewFolderList.value.replace('\\', '\\\\'), 'mail', 'bylabel');
        oForm.s_NewFolderList.value = '';
    }
    ESM.prototype.DlJ.call(this, sUnid);
};
GjU.prototype.onError = function Gsq(sError, sSolution, nErrorCode) {
    var oForm = AAA.EcK.getElementById('e-pageui-' + this.Blr.sId);
    if (oForm.s_NewFolderList.value) {
        oForm.s_NewFolderList.value = '';
    }
    ESM.prototype.onError.call(this, sError, sSolution, nErrorCode);
};
EbK.prototype.Est = function Etb(ESQ) {
    var EcK = AAA.EcK;
    var EJs = ELU.EJs[this.sId];
    var Blr = EJs.EZN;
    var oForm = EcK.getElementById('e-pageui-' + Blr.sId);
    var oNote = Blr.oNote;
    AAA.GFY.innerHTML = ESQ.innerHTML;
    var Eon = AAA.GFY.getElementsByTagName("IMG");
    var Evb = 0;
    var Ess = [];
    var GxI = /\/([^\/]+)\/([^\/]+\/[^\/]+)\?openelement(&fieldelemformat=([^&]*))$/i;
    var HBV = /\$file\/image\..*&([^&]+)$/i;
    var HBi = /\/([^\/]+)\/(body\/m.*)\?openelement(.*)$/i;
    var Gwr = [];
    var GwV = [];
    var GzO = [];
    var GdS = "quickr_";
    var HFF = /\/quickr_(.*)\.(.*)\?/i;
    var HGu = new RegExp((AAA.FWz.CXa ? 'https:' : 'http:') + '\/\/' + AAA.ELM.gLoc.hostname + '.*\/icons\/(dblink\.gif|viewlink\.gif|doclink\.gif)', 'i');
    var GLz = AAA.ELM.gLoc.hostname.toLowerCase();
    var MO = AAA.MO.toLowerCase();
    for (var i = 0; i < Eon.length; i++) {
        try {
            var Dat = Eon[i].src;
            var ELS = (Dat || '').toLowerCase().match(new RegExp('^https?:/+([^/]+)(.*\.nsf)'));
            var GxO = GLz && MO && ELS && GLz == ELS[1].split(':')[0] && MO == ELS[2];
            var HBZ = GxO && GxI.test(Dat) ? Gwr : GxO && HBV.test(Dat) ? GwV : HBi.test(Dat) ? GzO : HFF.test(Dat) ? GwV : HGu.test(Dat) ? GwV : [];
            if (HBZ == Gwr && Eon[i].width == 1 && Eon[i].height == 1) Eon[i].src = ''; else HBZ.push(Eon[i]);
        } catch (e) {
        }
    }
    for (var i = 0; i < Gwr.length; i++) {
        var ELS = Gwr[i].src.match(GxI);
        var GwP = new Date().getTime() + i + '';
        Gwr[i].setAttribute('cid', GwP);
        Ess.push(GwP);
        Evb++;
        oForm.s_ConvertImage.value = "1";
        var GFa = 'Image.' + GwP + '.' + (ELS[4] || '').replace(/[\<>\\;\/\"\']/gi, '');
        oForm.s_EmbeddedImageInfo.value += (oForm.s_EmbeddedImageInfo.value ? ';' : '') + ELS[1] + '/' + GFa + '/' + ELS[2] + ELS[3];
    }
    var GOv = [];
    var GOV = [];
    for (var i = 0; i < GwV.length; i++) {
        var cid;
        var ELS;
        if ((ELS = GwV[i].src.match(HFF)) && ELS.length > 1) {
            var type = ELS[1];
            var ext = ELS[2];
            var CXv = GdS + type + "." + ext;
            var cid = type == "doc" ? "0000000001337" : type == "folder" ? "0000000001338" : type == "place" ? "0000000001339" : ((new Date().getTime() + i) + '');
            if (GOV[CXv]) cid = GOV[CXv]; else {
                GOV[CXv] = cid;
                GOv.push(CXv + "/" + cid);
            }
        } else if ((ELS = GwV[i].src.match(HGu)) && ELS.length > 1) {
            var CXv = ELS[1];
            var cid = CXv == "dblink.gif" ? "0000000001400" : CXv == "viewlink.gif" ? "0000000001401" : CXv == "doclink.gif" ? "0000000001402" : ((new Date().getTime() + i) + '');
            if (GOV[CXv]) cid = GOV[CXv]; else {
                GOV[CXv] = cid;
                GOv.push(CXv + "/" + cid);
            }
        } else {
            ELS = GwV[i].src.match(HBV);
            cid = ELS[1];
        }
        GwV[i].setAttribute('cid', cid);
        Ess.push(cid);
    }
    if (GOv.length) {
        oForm.s_ConvertQuickrIconImageInfo.value = GOv.join(";");
        oForm.s_ImageUseCidRef.value = "1";
        oForm.s_ConvertImage.value = "1";
    }
    var Ehm = oNote.EHA('s_AllAttachmentNames');
    var ELV = (Ehm instanceof Array ? Ehm : Ehm ? [Ehm] : []);
    var GyD = {};
    for (var i = 0; i < GzO.length; i++) {
        try {
            var HBC = GzO[i].src.match(HBi);
            var HBD = (HBC[3] || '').match(/&cid=([^&]+)/i);
            var sCid = HBD && HBD[1] || ((new Date().getTime() + i) + '');
            if (HBD && HBD[1]) {
                var Qo = ESp(ELV, new RegExp('^image\.' + sCid, 'i'), function (CXv, Bid) {
                    return Bid.test(CXv);
                });
                var HBx = sCid in GyD;
                GyD[sCid] = true;
                Qo >= 0 && Ess.push(sCid);
                if (Qo >= 0 || HBx) {
                    GzO[i].setAttribute('cid', sCid);
                    continue;
                }
            }
            sCid = sCid.replace(/[\/\\;]/gi, '_');
            GzO[i].setAttribute('cid', sCid);
            oForm.s_CidImageInfo.value += (oForm.s_CidImageInfo.value ? ';' : '') + HBC[1] + '/Image.' + sCid + '/' + HBC[2];
            Evb++;
            Ess.push(sCid);
            oForm.s_ConvertImage.value = "1";
        } catch (e) {
        }
    }
    if (Ess.length > 0) {
        oForm.s_ImageUseCidRef.value = "1";
        oForm['BodyImgCids'].value = Ess.join(';');
    }
    if (Evb) oForm.h_ImageCount.value = (oForm.h_ImageCount.value || 0) + Evb;
    var re1 = new RegExp('(<img[^>]*src=")([^>]*)("[^>]*)cid="([^>]*)"([^>]*)>', 'gi');
    var re2 = new RegExp('(<img[^>]*)cid="([^>]*)"([^>]*src=")([^>"]*)("[^>]*)>', 'gi');
    return AAA.GFY.innerHTML.replace(re1, '$1cid:$4$3$5>').replace(re2, '$1$3cid:$2$5>');
};
function EXV(sId) {
    var EJs = ELU.EJs[this.sId = sId];
    var Blr = EJs.EZN;
    var oForm = AAA.EcK.getElementById('e-pageui-' + Blr.sId);
    var oElem = AAA.EcK.getElementById(EJs.EFb);
    var EPQ = EJs.EFb.replace(/^e\-.*\-([^\-]+)$/i, '$1');
    var oMap = {returnreceipt: 'ReturnReceipt', forcesign: 'Sign', forceseal: 'Encrypt', keepprivate: '$KeepPrivate'};
    if (EPQ in oMap) {
        oForm[oMap[EPQ]].value = !!oElem.checked - 0 + '';
    } else if (EPQ == 'highpriority') {
        oForm.DeliveryPriority.value = oElem.checked ? "H" : "N";
        oForm.Importance.value = Blr.oForm.ETL[oForm.DeliveryPriority.value];
    } else if (EPQ == 'classification') {
        oForm.ConfidentialString.value = oForm.ConfidentialString.value || AAA.FWz.ConfidentialString;
        oForm.Classification.value = oElem.checked ? oForm.ConfidentialString.value : '';
        if (oForm.Classification) {
            var Gqw = EYX(<dwa:property id="D_CONFIDENTIAL_FORMAT"/>, oForm.ConfidentialString.value, '');
            oForm.Subject.value = !oElem.checked ? oForm.Subject.value.replace(Gqw, '') : oForm.Subject.value.indexOf(AAA.FWz.ConfidentialString) < 0 ? EYX(<dwa:property id="D_CONFIDENTIAL_FORMAT"/>, oForm.ConfidentialString.value, oForm.Subject.value) : oForm.Subject.value;
        }
    }
}
function HDb(ev) {
    if (ev.type != 'keydown') return;
    if (ev.keyCode == 13) {
        ev.returnValue = false;
        ev.cancelBubble = true;
        return false;
    }
}
function HMn(ev) {
    if (ev.type != 'paste' && ev.type != 'drop') return;
    var Btk = ev.srcElement;
    if (Btk) setTimeout(HFy.EHq(window, Btk), 0);
}
function HFy(CKk) {
    if (!CKk) return;
    var sVal = CKk.value;
    if (sVal.match(/[\r\n]/)) {
        CKk.value = sVal.replace(/(\r\n|\r|\n)$/, '').replace(/(\r\n|\r|\n)/g, ' ');
        if (CKk.createTextRange) {
            var Yt = CKk.createTextRange();
            if (Yt != null) {
                try {
                    Yt.move('textedit', -1);
                    Yt.move('character', this.value.length);
                    Yt.select();
                } catch (e) {
                }
            }
        }
    }
}
function Form_memo_is_private_doc(oNote, bMultiParentUnid) {
    if (bMultiParentUnid) {
        for (var i = 0; i < oNote.ByT['x_KeepPrivateParentHtml'].length; i++) {
            var DOn = oNote.ByT['PrincipalParentHtml'][i];
            var sFrom = DOn ? DOn : oNote.ByT['FromParentHtml'][i];
            if (oNote.ByT['x_KeepPrivateParentHtml'][i] == '1' && sFrom && AAA.FWz.EUz && (sFrom != AAA.FWz.Edd)) return true;
        }
    } else {
        var DOn = oNote.EEr.EHA("Principal");
        var sFrom = DOn ? DOn : oNote.EEr.EHA("From");
        return oNote.EEr.EHA('x_KeepPrivate', 0) == '1' && sFrom && AAA.FWz.EUz && (sFrom != AAA.FWz.EUz);
    }
    return false;
} 